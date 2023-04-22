import createHttpError from "http-errors";
import { NextApiRequest } from "next";
import * as yup from "yup";

export const validateBookingDate = (req: NextApiRequest): Date => {
	if (!req.body.bookingDate) {
		throw new createHttpError.BadRequest("Booking date is required");
	}

	const date = new Date(req.body.bookingDate);
	if (isNaN(date.getTime())) {
		throw new createHttpError.BadRequest(
			`"${req.body.bookingDate}" is not a valid date string`
		);
	}
	return date;
};
