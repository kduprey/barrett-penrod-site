import { GetServerSideProps } from "next";
import Stripe from "stripe";
import BookingsLayout from "../../components/BookingsLayout";
import { stripe } from "../../config";
import { NextPageWithLayout } from "../../types/types";
import getPackageName from "../../utils/getPackageName";
import getZoomLink from "../../utils/getZoomLink";
import isPackageCheckout from "../../utils/isPackageCheckout";
import { getEventInfo } from "../api/calendly/getEventInfo";
import { getEventInvitee } from "../api/calendly/getEventInvitee";

type Props = {
	name: string;
	start_time: string;
	zoomLink?: string;
	packageName?: string | null;
	sessionTitle: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const params = ctx.query;
	let packageName: string | null = null,
		zoomLink: string | null = null;

	const session: Stripe.Checkout.Session =
		(await stripe.checkout.sessions.retrieve(
			params.session_id as string
		)) as Stripe.Checkout.Session;

	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

	const {
		data: {
			resource: { name: eventName, start_time },
		},
	} = await getEventInfo(session.client_reference_id as string);
	const {
		data: {
			resource: { name },
		},
	} = await getEventInvitee(session?.metadata?.inviteeURI as string);

	// Get package name if it's a bundle
	if (await isPackageCheckout(session)) {
		packageName = getPackageName(lineItems.data as Stripe.LineItem[]);
	}

	// Get zoom link
	zoomLink = await getZoomLink(session.client_reference_id as string);

	return {
		props: {
			name,
			start_time: start_time.toString(),
			zoomLink,
			packageName: packageName,
			sessionTitle: eventName,
		} as Props,
	};
};

const Success: NextPageWithLayout = ({
	name,
	start_time,
	zoomLink,
	packageName,
	sessionTitle,
}: Props) => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">Booking Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 shadow-lg">
				<p className="text-2xl text-primary">Thank you, {name}</p>

				{packageName && (
					<p className="text-primary">
						You have purchased the{" "}
						<span className="font-semibold ">{packageName}</span>{" "}
						bundle.
					</p>
				)}
				<p className="text-primary">
					Your {packageName ? "first" : "upcoming"}{" "}
					<span className="font-semibold ">{sessionTitle}</span>{" "}
					session is at:
				</p>

				<p className="font-semibold text-primary">
					{new Date(start_time).toLocaleTimeString([], {
						hour: "numeric",
						minute: "2-digit",
					})}{" "}
					on{" "}
					{new Date(start_time).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
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
		</div>
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
