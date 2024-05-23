import { bundles, stripe } from "@bpvs/config";
import { qr_code_logs } from "@bpvs/db";
import AboutStudio from "@bpvs/site/components/Bookings/AboutStudio";
import Bio from "@bpvs/site/components/Bookings/Bio";
import Bundles from "@bpvs/site/components/Bookings/Bundles";
import ConsultationSession from "@bpvs/site/components/Bookings/ConsultationSession";
import IndividualSession from "@bpvs/site/components/Bookings/IndividualSession";
import LessonDemo from "@bpvs/site/components/Bookings/LessonDemo";
import Services from "@bpvs/site/components/Bookings/Services";
import BookingsLayout from "@bpvs/site/components/BookingsLayout";
import Logo from "@bpvs/site/components/Logo";
import { LessonBundle, NextPageWithLayout } from "@bpvs/types";
import axios from "axios";
import { GetServerSideProps } from "next";
import { z } from "zod";
import cookie from "cookie";

// TODO: Implement barrell export for components

const queryParamsSchema = z.object({
  qr: z.string().optional(),
  clientType: z.string().optional(),
});

export const config = {
  runtime: "nodejs", // or "edge"
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Pull clientType from sessionStorage, decrypt it, and update pricing accordingly
  const params = queryParamsSchema.safeParse(ctx.query);

  if (!params.success)
    return {
      props: {
        bundleData: bundles,
      },
    };

  if (params.data.qr) {
    const qrID = z.string().parse(params.data.qr);
    // Update QRDB
    const status = await axios.post<qr_code_logs>(
      window.location.origin + "/api/updateQRDB",
      {
        qrID,
      },
    );
    if (status.data) {
      console.log(status.data);
    }
  }

  if (params.data.clientType) {
    const clientType = z.string().safeParse(params.data.clientType);

    if (clientType.success) {
      ctx.res.setHeader(
        "Set-Cookie",
        cookie.serialize("__Secure-clientType", clientType.data, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          domain: ctx.req.headers.host,
          maxAge: 3600,
        }),
      );
    }
  }

  if (ctx.req.cookies["__Secure-clientType"] || params.data.clientType) {
    //  safely parse the clientType from the cookie or query params

    const clientType = z
      .string()
      .safeParse(
        ctx.req.cookies["__Secure-clientType"] ?? params.data.clientType,
      );

    if (clientType.success) {
      // Decrypt clientType
      const decryptedClientType = Buffer.from(
        clientType.data,
        "base64",
      ).toString();

      const coupons = await stripe.coupons.list();

      // Update pricing based on clientType
      return {
        props: {
          bundleData: bundles.map((bundle) => ({
            ...bundle,
            price:
              Number(bundle.price) -
              (coupons.data.find((coupon) =>
                coupon.name?.includes(
                  `${decryptedClientType} - ${bundle.title}`,
                ),
              )?.amount_off ?? 0) /
                100,
          })),
        },
      };
    }
  }

  return {
    props: { bundleData: bundles },
  };
};

const Bookings: NextPageWithLayout = ({
  bundleData,
}: {
  bundleData: LessonBundle[];
}) => (
  <section className={" flex flex-col items-center justify-center gap-3 px-6"}>
    {/* Logo */}
    <div className="w-full max-w-[25em] py-5">
      <Logo />
    </div>

    {/* Bio & Philiosophy */}
    <Bio />

    <hr className="my-3 w-full rounded bg-secondary p-1" />

    {/* About The Studio */}
    <AboutStudio />

    <hr className="my-3 w-full rounded bg-secondary p-1" />
    {/* Lesson Demo */}
    <LessonDemo />

    <hr className="my-3 w-full rounded bg-secondary p-1" />

    {/* Services */}
    <section className="flex flex-wrap items-center justify-center gap-5 2xl:h-full 2xl:w-full 2xl:justify-evenly">
      <Services />

      {/* Consultation Section */}
      <ConsultationSession />
    </section>

    {/* Discount Packages */}
    <Bundles {...{ bundleData: bundleData }} />

    <IndividualSession />
  </section>
);

export default Bookings;

Bookings.getLayout = (page) => (
  <BookingsLayout
    title="Barrett Penrod Voice Studio"
    description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
  >
    {page}
  </BookingsLayout>
);
