import { z } from "zod";
import { PackageTypeEnum } from "../events";
export * from "./stripeSchemas.zod";

export const metadataParamSchema = z.record(
	z.union([z.string(), z.number()]).nullable()
);

export const StripeLineItemSchema = z.object({
	adjustable_quantity: z.optional(
		z.object({
			enabled: z.boolean().optional(),
			maximum: z.number().optional(),
			minimum: z.number().optional(),
		})
	),
	dynamic_tax_rates: z.array(z.string()).optional(),
	price: z.string().optional(),
	price_data: z.object({
		currency: z.string(),
		product: z.string().optional(),
		product_data: z.object({
			description: z.string().optional(),
			images: z.array(z.string()).optional(),
			metadata: metadataParamSchema.optional(),
			name: z.string(),
			tax_code: z.string().optional(),
		}),
		recurring: z.object({
			interval: z.union([
				z.literal("day"),
				z.literal("month"),
				z.literal("week"),
				z.literal("year"),
			]),
			interval_count: z.number().optional(),
		}),
		tax_behavior: z
			.union([
				z.literal("exclusive"),
				z.literal("inclusive"),
				z.literal("unspecified"),
			])
			.optional(),
		unit_amount: z.number().optional(),
		unit_amount_decimal: z.string().optional(),
	}),
	quantity: z.number().optional(),
	tax_rates: z.array(z.string()).optional(),
});

export const lessonBundleSchema = z.object({
	amtSessions: z.number(),
	title: PackageTypeEnum,
	discount: z.string(),
	price: z.string(),
	priceID: z.object({
		live: StripeLineItemSchema,
		test: StripeLineItemSchema,
	}),
});

export const priceSchema = z.object({
	name: z.union([
		z.literal("SVS Session"),
		z.literal("Regular Session"),
		z.literal("Open Jar Booking Fee"),
	]),
	priceID: z.object({
		live: StripeLineItemSchema,
		test: StripeLineItemSchema,
	}),
});
