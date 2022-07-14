import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../types";
import Layout from "../layout";

type Props = {
	session: Stripe.Checkout.Session;
};

const Cancel: NextPageWithLayout = (props: Props) => {
	const router = useRouter();

	const { sessionId: string } = router.query;

	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4">
			<h2 className="text-center text-secondary">Booking Cancelled</h2>
			<div className="m-3 flex w-1/2 flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
				<p className="text-center text-primary">
					Downpayment is required to confirm booking. Booking will be
					cancelled within the hour pending no downpayment is
					received.
				</p>
				<a
					href={
						props.session.url
							? props.session.url
							: (props.session.after_expiration?.recovery
									?.url as string)
					}
					className="text-center text-primary underline"
				>
					If you would like to keep the booking, click here to
					continue with payment.
				</a>

				<p className="text-center text-primary">
					Please check your email for confirmation.
				</p>
			</div>
		</div>
	);
};

export default Cancel;

Cancel.getLayout = (page) => <Layout>{page}</Layout>;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import Stripe from "stripe";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY as string, {
		apiVersion: "2020-08-27",
	});

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
