import { Collection, Db, MongoClient } from "mongodb";
import { db, dbURL } from "../config";
import {
	BookingInfo,
	CalendlyInviteePayload,
	ClientInfo,
	stripeCustomer,
} from "../types/types";

export const collections: {
	clients?: Collection<ClientInfo>;
	stripeCustomers?: Collection<stripeCustomer>;
	bookings?: Collection<BookingInfo>;
	eventInvitees?: Collection<CalendlyInviteePayload>;
} = {};

export async function connectToDatabase() {
	if (!dbURL) {
		return console.error("No database URL found");
	}
	const liveClient: MongoClient = new MongoClient(dbURL);

	await liveClient.connect().catch((err) => {
		console.log("Error connecting to database");

		console.error(err);
	});

	const database: Db = liveClient.db(db);

	const clients: Collection<ClientInfo> = database.collection("clients");
	const stripeCustomers: Collection<stripeCustomer> =
		database.collection("stripeCustomers");
	const bookings: Collection<BookingInfo> = database.collection("bookings");
	const eventInvitees: Collection<CalendlyInviteePayload> =
		database.collection("calendlyInviteePayloads");

	collections.clients = clients;
	collections.stripeCustomers = stripeCustomers;
	collections.bookings = bookings;
	collections.eventInvitees = eventInvitees;
}
