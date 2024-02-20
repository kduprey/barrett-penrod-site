"use server";

import { stripe } from "@bpvs/config";
import { prisma } from "@bpvs/db";

export const createService = async ({
	name,
	description,
	duration,
	price,
}: {
	name: string;
	description: string;
	duration: number;
	price: number;
}) => {
	const product = await stripe.products.create({
		name,
		description,
		default_price_data: {
			currency: "usd",
			unit_amount: price,
		},
		shippable: false,
		unit_label: "session",
	});

	const availability = await prisma.availabilitySchedule.findFirstOrThrow({
		where: {
			isDefault: true,
		},
	});

	const service = await prisma.serviceType.create({
		data: {
			name,
			description,
			duration,
			productId: product.id,
			availabilityScheduleId: availability.id,
		},
	});

	return service;
};
