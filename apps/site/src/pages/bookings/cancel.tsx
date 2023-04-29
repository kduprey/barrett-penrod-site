import { stripe } from "@bpvs/config";
import { NextPageWithLayout } from "@bpvs/types";
import { getCalendlyInvitee } from "@bpvs/utils";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import BookingsLayout from "../../components/BookingsLayout";

type Props = {
	session?: Stripe.Checkout.Session;
	name: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { session_id } = ctx.query;

	if (!session_id) {
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
		} = await getCalendlyInvitee(session?.metadata?.inviteeURI as string);

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
			<h2 className="text-secondary text-center">Booking Cancelled</h2>
			<div className="bg-secondary m-3 flex flex-col items-center justify-center space-y-4 rounded p-6 shadow-lg md:w-1/2">
				<h4 className="text-primary">
					Hey, {name.substring(0, name.indexOf(" "))}
				</h4>
				<p className="text-primary text-center">
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
					className="text-primary text-center underline"
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
