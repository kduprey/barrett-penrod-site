import { BookingInfo, NextPageWithLayout } from "../../types";
import Layout from "../../components/Layout";
import Stripe from "stripe";

type Props = {
	session?: Stripe.Checkout.Session;
	customer?: Stripe.Customer;
	bookingInfo?: BookingInfo;
};

const Success: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">Booking Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
				{props.bookingInfo ? (
					<>
						<p className="text-primary">
							Thank you,{" "}
							{props.customer?.name ||
								props.bookingInfo.invitee_full_name}
						</p>
						<p className="text-primary">
							{props.bookingInfo.event_type_name}
						</p>
						<p className="text-primary">
							{new Date(
								props.bookingInfo.event_start_time
							).toLocaleTimeString([], {
								hour: "numeric",
								minute: "2-digit",
							})}{" "}
							on{" "}
							{new Date(
								props.bookingInfo.event_start_time
							).toLocaleDateString([], {
								weekday: "long",
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</p>
					</>
				) : (
					<p className="text-primary">Thank you for your booking.</p>
				)}
				<p className="text-center text-primary">
					Please check your email for confirmation.
				</p>
			</div>
		</div>
	);
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { server, stripe } from "../../config";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const statuses = {
		guestEmailsSent: {
			status: false,
			message: null as any,
		},
		firstTimeEmailSent: {
			status: false,
			message: null as any,
		},
		consultationEmailSent: {
			status: false,
			message: null as any,
		},
	};

	// Are there guests?

	if (ctx.query.guests) {
		try {
			const response = await fetch(`${server}/api/bookings/guest`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_id: ctx.query.session_id,
					guests: ctx.query.guests,
					eventStartTime: ctx.query.event_start_time,
					eventEndTime: ctx.query.event_end_time,
					eventTypeName: ctx.query.event_type_name,
				}),
			});
			statuses.guestEmailsSent.status = true;
			statuses.guestEmailsSent.message = await response.body;
		} catch (err: any) {
			console.log(err);
			statuses.guestEmailsSent.status = false;
			statuses.guestEmailsSent.message = err;
		}
	}

	// Is this a first time booking?

	if (ctx.query.answer_2 === "Yes") {
		try {
			const response = await fetch(`${server}/api/bookings/first-time`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_id: ctx.query.session_id,
					invitee_email: ctx.query.invitee_email,
					invitee_full_name: ctx.query.invitee_full_name,
					eventStartTime: ctx.query.event_start_time,
					eventEndTime: ctx.query.event_end_time,
					eventTypeName: ctx.query.event_type_name,
				}),
			});
			statuses.firstTimeEmailSent.status = true;
			statuses.firstTimeEmailSent.message = await response.body;
		} catch (err: any) {
			console.log(err);
			statuses.firstTimeEmailSent.status = false;
			statuses.firstTimeEmailSent.message = err;
		}
	}

	if (ctx.query.event_type_name === "Consultation Session") {
		try {
			const response = await fetch(
				`${server}/api/bookings/consultation`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						invitee_email: ctx.query.invitee_email,
						invitee_full_name: ctx.query.invitee_full_name,
						eventStartTime: ctx.query.event_start_time,
						eventEndTime: ctx.query.event_end_time,
						eventTypeName: ctx.query.event_type_name,
					}),
				}
			);

			statuses.consultationEmailSent.status = true;
			statuses.consultationEmailSent.message = await response.body;
		} catch (err: any) {
			console.log(err);
			statuses.consultationEmailSent.status = false;
			statuses.consultationEmailSent.message = err;
		}
		if (statuses.consultationEmailSent.status) {
			return {
				props: {
					bookingInfo: { ...ctx.query },
				},
			};
		} else {
			return {
				notFound: true,
			};
		}
	}

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

export default Success;
Success.getLayout = (page) => <Layout>{page}</Layout>;
