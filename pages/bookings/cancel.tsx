import { GetServerSideProps } from "next";
import Stripe from "stripe";
import BookingsLayout from "../../components/BookingsLayout";
import { stripe } from "../../config";
import { NextPageWithLayout } from "../../types/types";
import { getEventInvitee } from "../api/calendly/eventInvitee";

type Props = {
	session?: Stripe.Checkout.Session;
	name: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { sessionId } = ctx.query;

	if (!sessionId) {
		return {
			notFound: true,
		};
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(
			ctx.query.session_id as string
		);

		const {
			resource: { name },
		} = await getEventInvitee(session?.metadata?.inviteeURI as string);

		return {
			props: {
				session,
				name,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
};

const Cancel: NextPageWithLayout = ({ session, name }: Props) => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 p-4">
			<h2 className="text-center text-secondary">Booking Cancelled</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg md:w-1/2">
				<h4 className="text-primary">
					Hey, {name.substring(0, name.indexOf(" "))}
				</h4>
				<p className="text-center text-primary">
					Downpayment is required to confirm booking. Booking will be
					cancelled within the hour pending no downpayment is
					received.
				</p>
				<a
					href={
						session?.url
							? session.url
							: (session?.after_expiration?.recovery
									?.url as string)
					}
					className="text-center text-primary underline"
				>
					If you would like to keep the booking, click here to
					continue with payment.
				</a>
			</div>
		</div>
	);
};

export default Cancel;

Cancel.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
