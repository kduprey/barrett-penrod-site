import { NextPageWithLayout } from "../../types";
import Layout from "../layout";

type Props = {
	session: Stripe.Checkout.Session;
	customer: Stripe.Customer;
	event_start_time: string;
	event_end_time: string;
	event_type_name: string;
};

const Success: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">Booking Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
				<p className="text-primary">Thank you, {props.customer.name}</p>
				<p className="text-primary">{props.event_type_name}</p>
				<p className="text-primary">
					{new Date(props.event_start_time).toLocaleTimeString([], {
						hour: "numeric",
						minute: "2-digit",
					})}{" "}
					on{" "}
					{new Date(props.event_start_time).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</p>
				<p className="text-center text-primary">
					Please check your email for confirmation.
				</p>
			</div>
		</div>
	);
};
export default Success;
Success.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY as string, {
		apiVersion: "2020-08-27",
	});

	try {
		const session = await stripe.checkout.sessions.retrieve(
			ctx.query.session_id as string
		); // your fetch function here

		const customer = await stripe.customers.retrieve(
			session.customer as string
		);

		return {
			props: {
				session,
				customer,
				event_start_time: ctx.query.event_start_time as string,
				event_end_time: ctx.query.event_end_time as string,
				event_type_name: ctx.query.event_type_name as string,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
