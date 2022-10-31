import Stripe from "stripe";
import {
	Contact,
	Guest,
	GuestBody,
	NextPageWithLayout,
} from "../../types/types";

type Props = {
	eventTime: string;
	zoomLink: string;
	name: string;
	service: number;
	session: Stripe.Checkout.Session;
	customer: Stripe.Customer;
	bundle?: number;
};

const Success: NextPageWithLayout = (props: Props) => {
	const eventTimeObj = new Date(props.eventTime);

	console.log(props);

	if (props.zoomLink)
		return (
			<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
				<h2 className="text-center text-secondary">
					Consultation Session Confirmed
				</h2>

				<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
					<p className="text-primary">Thank you, {props.name}</p>
					<p className="text-center text-primary">
						Your consultation session has been scheduled for{" "}
						{eventTimeObj.toLocaleString([], {
							hour: "numeric",
							minute: "2-digit",
						})}{" "}
						on{" "}
						{eventTimeObj.toLocaleDateString([], {
							weekday: "long",
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</p>
					<div className="flex flex-col items-center justify-center">
						<p className="text-primary">
							You can join the Zoom meeting here!
						</p>
						<a href={props.zoomLink}>{props.zoomLink}</a>
					</div>

					<p className="text-center text-primary">
						We will send you a confirmation email shortly.
					</p>
				</div>
			</section>
		);
	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">Booking Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 shadow-lg">
				{props.customer ? (
					<p className="text-2xl text-primary">
						Thank you, {props.customer.name}
					</p>
				) : (
					<p className="text-primary">Thank you!</p>
				)}
				{props.bundle && (
					<p className="text-primary">
						You have booked the{" "}
						<span className="font-semibold ">
							{bundles[props.bundle].title}
						</span>{" "}
						bundle.
					</p>
				)}
				<p className="text-primary">
					Your {props.bundle ? "first" : "upcoming"}{" "}
					<span className="font-semibold ">
						{services[props.service].title}
					</span>{" "}
					session is at:
				</p>

				<p className="font-semibold text-primary">
					{eventTimeObj.toLocaleTimeString([], {
						hour: "numeric",
						minute: "2-digit",
					})}{" "}
					on{" "}
					{eventTimeObj.toLocaleDateString([], {
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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import BookingsLayout from "../../components/BookingsLayout";
import { server, stripe } from "../../config";
import { bundles, services } from "../../data/services";

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
		packageEmailSent: {
			status: false,
			message: null as any,
		},
	};

	const params = ctx.query;

	const service = parseInt(params.service as string);
	const eventTime = new Date(params.eventTime as string);

	// If booking is consultation
	if (service == 9) {
		const { email, name, zoomLink } = params;

		try {
			const response = await fetch(
				`${server}/api/bookings/consultation`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						invitee_email: email,
						invitee_full_name: name,
						eventStartTime: eventTime,
						eventTypeName: "Consultation",
						zoomLink: zoomLink,
					}),
				}
			);

			// Are there guests?
			if (params.guests) {
				try {
					const guestEmails: Contact[] = (params.guests as string)
						.split(",")
						.map((guestEmail) => {
							return {
								email: guestEmail,
							};
						});

					const response = await fetch(
						`${server}/api/bookings/guest`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								guests: guestEmails,
								eventStartTime: params.eventTime,
								eventTypeName: services[service].title,
							} as GuestBody),
						}
					);
					statuses.guestEmailsSent.status = true;
					statuses.guestEmailsSent.message = await response.json();
				} catch (err: any) {
					console.log(err);
					statuses.guestEmailsSent.status = false;
					statuses.guestEmailsSent.message = err;
				}
			}

			statuses.consultationEmailSent.status = response.ok;
			statuses.consultationEmailSent.message = await response.json();
		} catch (err: any) {
			console.log(err);
			statuses.consultationEmailSent.status = false;
			statuses.consultationEmailSent.message = err;
		}

		if (statuses.consultationEmailSent.status) {
			console.log(statuses.consultationEmailSent.message);
			return {
				props: {
					eventTime: eventTime.toString(),
					zoomLink: zoomLink as string,
					name: name as string,
					service,
				},
			};
		} else {
			return {
				notFound: true,
			};
		}
	}

	const location = parseInt(params.location as string);
	const session = await stripe.checkout.sessions.retrieve(
		params.session_id as string
	);
	const customer = await stripe.customers.retrieve(
		session.customer as string
	);

	// If booking is package
	if (params.bundle && !customer.deleted) {
		const bundle = parseInt(params.bundle as string);
		try {
			const response = await fetch(
				`${server}/api/bookings/package-confirmation`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
					body: JSON.stringify({
						invitee_email: customer.email,
						invitee_full_name: customer.name,
						bulkSessionDiscountPackage: bundles[bundle].title,
						dateOfFirstSession: params.eventTime,
						bookingTime: params.eventTime,
						bookingDate: params.eventTime,
						bookingLocation: services[service].locations[location],
					}),
				}
			);
			statuses.packageEmailSent.status = true;
			statuses.packageEmailSent.message = await response.json();
		} catch (error) {
			statuses.packageEmailSent.status = false;
			statuses.packageEmailSent.message = error;
		}
	}

	// Are there guests?
	if (params.guests) {
		try {
			const temp = params.guests as unknown as Guest[];
			const guestEmails: Contact[] = temp.map((guest) => {
				return {
					email: guest.email,
				};
			});

			const response = await fetch(`${server}/api/bookings/guest`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					guests: guestEmails,
					eventStartTime: params.eventTime,
					eventTypeName: services[service].title,
				} as GuestBody),
			});
			statuses.guestEmailsSent.status = true;
			statuses.guestEmailsSent.message = await response.json();
		} catch (err: any) {
			console.log(err);
			statuses.guestEmailsSent.status = false;
			statuses.guestEmailsSent.message = err;
		}
	}

	// Is this a first time booking?
	const firstTime: boolean = params.firstTime === "true" ? true : false;
	if (firstTime && !customer.deleted) {
		try {
			const response = await fetch(`${server}/api/bookings/first-time`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					invitee_email: customer.email,
					invitee_full_name: customer.name,
					eventStartTime: params.eventTime,
					eventTypeName: services[service].title,
				}),
			});
			statuses.firstTimeEmailSent.status = true;
			statuses.firstTimeEmailSent.message = await response.json();
		} catch (err: any) {
			console.log(err);
			statuses.firstTimeEmailSent.status = false;
			statuses.firstTimeEmailSent.message = err;
		}
	}

	if (params.bundle) {
		const bundle = parseInt(params.bundle as string);
		return {
			props: {
				session,
				customer,
				bundle,
				service,
				location,
				eventTime: eventTime.toString(),
			},
		};
	}

	return {
		props: {
			session,
			customer,
			service,
			location,
			eventTime: eventTime.toString(),
		},
	};
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
