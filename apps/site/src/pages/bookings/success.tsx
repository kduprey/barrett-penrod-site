import { stripe } from "@bpvs/config";
import { NextPageWithLayout } from "@bpvs/types";
import {
  getCalendlyEvent,
  getCalendlyEventZoomLink,
  getCalendlyInvitee,
  getPackageTypeFromLineItems,
  isPackageCheckout,
} from "@bpvs/utils";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import BookingsLayout from "../../components/BookingsLayout";
import Loading from "../../components/Loading";

type Props = {
  name: string;
  start_time: string;
  zoomLink?: string;
  packageName?: string | null;
  sessionTitle: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.query;

  if (!params.session_id) {
    return {
      notFound: true,
    };
  }
  let packageName: string | null = null,
    zoomLink: string | null = null;

  try {
    const session: Stripe.Checkout.Session =
      (await stripe.checkout.sessions.retrieve(
        params.session_id as string
      )) as Stripe.Checkout.Session;

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    const event = await getCalendlyEvent(session.client_reference_id as string);
    const {
      resource: { name },
    } = await getCalendlyInvitee(session?.metadata?.inviteeURI as string);

    // Get package name if it's a bundle
    if (isPackageCheckout(lineItems.data)) {
      packageName = getPackageTypeFromLineItems(lineItems.data);
    }

    // Get zoom link if it's a zoom location
    zoomLink = await getCalendlyEventZoomLink(event);

    return {
      props: {
        name,
        start_time: event.resource.start_time,
        zoomLink: zoomLink ? zoomLink : null,
        packageName: packageName,
        sessionTitle: event.resource.name,
      } as Props,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};

const Success: NextPageWithLayout = ({
  name,
  start_time,
  zoomLink,
  packageName,
  sessionTitle,
}: Props) => {
  const [date, setDate] = useState<string>(start_time);
  const [time, setTime] = useState<string>(start_time);

  useEffect(() => {
    const tempDate = new Date(start_time).toLocaleDateString([], {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const tempTime = new Date(start_time).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setDate(tempDate);
    setTime(tempTime);
  }, [start_time]);

  if (date === "" || time === "") return <Loading />;

  return (
    <section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
      <h2 className="text-center text-secondary">Booking Confirmed</h2>
      <div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 shadow-lg">
        <p className="text-2xl text-primary">Thank you, {name}</p>

        {packageName && (
          <p className="text-primary">
            You have purchased the{" "}
            <span className="font-semibold ">{packageName}</span> bundle.
          </p>
        )}
        <p className="text-primary">
          Your {packageName ? "first" : "upcoming"}{" "}
          <span className="font-semibold ">{sessionTitle}</span> session is at:
        </p>

        <p className="font-semibold text-primary">
          {time} on {date}
        </p>

        {zoomLink && (
          <p className="text-primary">
            You will receive a Zoom link to your email shortly.
          </p>
        )}

        <p className="text-center text-primary">
          Please check your email for confirmation.
        </p>
      </div>
    </section>
  );
};

export default Success;
Success.getLayout = (page) => (
  <BookingsLayout
    title="Barrett Penrod Voice Studio"
    description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
  >
    {page}
  </BookingsLayout>
);
