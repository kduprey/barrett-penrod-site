import { hygraphcms } from "@bpvs/config";
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
import { NextPageWithLayout } from "@bpvs/types";
import axios from "axios";
import { gql } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { z } from "zod";

// TODO: Implement barrell export for components

const promoContentsSchema = z.object({
  promoContents: z.array(
    z.object({
      headerForPromo: z.string().optional(),
      promoSubheadingDescription: z.string().optional(),
    })
  ),
});

export const getStaticProps = async () => {
  const QUERY = gql`
    query PromoContents {
      promoContents(stage: PUBLISHED) {
        headerForPromo
        promoSubheadingDescription
      }
    }
  `;

  const promoContentsResponse = await hygraphcms.request(QUERY);
  const promoContents = promoContentsSchema.parse(promoContentsResponse);

  return {
    props: {
      promoContents,
    },
  };
};

type Props = {
  promoContents: {
    headerForPromo: string;
    promoSubheadingDescription: string;
  }[];
};

const Bookings: NextPageWithLayout = ({ promoContents }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const handleQueryParams = async () => {
      const query = router.query;
      if (query.qr) {
        const qrID = z.string().parse(query.qr);
        // Update QRDB
        const status = await axios.post<qr_code_logs>(
          window.location.origin + "/api/updateQRDB",
          {
            qrID,
          }
        );
        if (status.data) {
          console.log(status.data);
        }
      }
    };
    void handleQueryParams();
  }, [router.query]);

  return (
    <section
      className={" flex flex-col items-center justify-center gap-3 px-6"}
    >
      {/* Promo Section */}
      {promoContents[0] && (
        <div className="flex flex-col items-center justify-center gap-3 p-3">
          <h1>{promoContents[0].headerForPromo}</h1>
          <h3 className="text-center">
            {promoContents[0].promoSubheadingDescription}
          </h3>
        </div>
      )}
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
      <Bundles />

      <IndividualSession />
    </section>
  );
};

export default Bookings;

Bookings.getLayout = (page) => (
  <BookingsLayout
    title="Barrett Penrod Voice Studio"
    description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
  >
    {page}
  </BookingsLayout>
);
