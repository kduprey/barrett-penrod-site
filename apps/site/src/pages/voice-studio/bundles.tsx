import { bundles, stripe } from "@bpvs/config";
import { LessonBundle, NextPageWithLayout } from "@bpvs/types";
import { useState } from "react";
import PackageModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";
import { z } from "zod";
import { GetServerSideProps } from "next";
import cookie from "cookie";

const queryParamsSchema = z.object({
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

const Bundles: NextPageWithLayout = ({
  bundleData,
}: {
  bundleData: LessonBundle[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBundle, setselectedBundle] = useState<number>();

  return (
    <section className="flex flex-col items-center p-4">
      <PackageModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedBundle={selectedBundle}
      />

      <div className="mx-auto max-w-[18rem]">
        <Logo />
      </div>
      <h2 className="py-6 text-center text-secondary">Discount Packages</h2>
      <div className="flex w-full max-w-screen-lg  flex-row flex-wrap items-center justify-evenly">
        {bundleData.map((bundle, index) => (
          <div
            key={bundle.title}
            className="withTransition m-2 flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90 md:w-[18rem] lg:w-[22rem]"
          >
            <h4 className="text-center text-primary">{bundle.title}</h4>
            <p className="text-center text-primary">{bundle.discount}</p>
            <p className="text-center text-3xl font-bold text-primary">
              ${bundle.price}
            </p>
            <button
              className="cursor-pointer bg-primary text-secondary"
              onClick={() => {
                setIsOpen(true);
                setselectedBundle(index);
              }}
            >
              Reserve Now!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bundles;

Bundles.getLayout = (page) => (
  <BookingsLayout
    title="Barrett Penrod Voice Studio"
    description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
  >
    {page}
  </BookingsLayout>
);
