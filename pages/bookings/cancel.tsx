import Stripe from "stripe";
import { NextPageWithLayout } from "../../types/types";

type Props = {
	session?: Stripe.Checkout.Session;
};

const Cancel: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 p-4">
			<h2 className="text-center text-secondary">Booking Cancelled</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg md:w-1/2">
				<p className="text-center text-primary">
					Downpayment is required to confirm booking. Booking will be
					cancelled within the hour pending no downpayment is
					received.
				</p>
				<a
					href={
						props.session?.url
							? props.session.url
							: (props.session?.after_expiration?.recovery
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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import BookingsLayout from "../../components/BookingsLayout";
import { stripe } from "../../config";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const session = await stripe.checkout.sessions.retrieve(
			ctx.query.session_id as string
		);

		return {
			props: {
				session,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
};
