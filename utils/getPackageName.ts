import Stripe from "stripe";
import { PackageType, PackageTypes } from "types/types";

const tempLineItems: Stripe.LineItem[] = [
	{
		id: "li_1LcBZpAMm0G1mbCtV6OlEkk5",
		object: "item",
		amount_discount: 0,
		amount_subtotal: 3000,
		amount_tax: 0,
		amount_total: 3000,
		currency: "usd",
		description: "Lesson Downpayment",
		price: {
			id: "price_1L88w7AMm0G1mbCt5xei9unc",
			object: "price",
			active: true,
			billing_scheme: "per_unit",
			created: 1654633415,
			currency: "usd",
			custom_unit_amount: null,
			livemode: true,
			lookup_key: null,
			metadata: {},
			nickname: "Session Downpayment",
			product: "prod_LpoZujmCNz4YqR",
			recurring: null,
			tax_behavior: "exclusive",
			tiers_mode: null,
			transform_quantity: null,
			type: "one_time",
			unit_amount: 3000,
			unit_amount_decimal: "3000",
		},
		quantity: 1,
	},
	{
		id: "li_1Lj7JMAMm0G1mbCtWozovIyf",
		object: "item",
		amount_discount: 0,
		amount_subtotal: 40000,
		amount_tax: 0,
		amount_total: 40000,
		currency: "usd",
		description: "6 Session Package",
		price: {
			id: "price_1LLKIlAMm0G1mbCtcZ3PDgqq",
			object: "price",
			active: true,
			billing_scheme: "per_unit",
			created: 1657775367,
			currency: "usd",
			custom_unit_amount: null,
			livemode: true,
			lookup_key: null,
			metadata: {},
			nickname: null,
			product: "prod_M3RBfpPsLJG0kp",
			recurring: null,
			tax_behavior: "exclusive",
			tiers_mode: null,
			transform_quantity: null,
			type: "one_time",
			unit_amount: 40000,
			unit_amount_decimal: "40000",
		},
		quantity: 1,
	},
];

const getPackageName = (lineItems: Stripe.LineItem[]): PackageType => {
	const packageName = lineItems.find((item) => {
		return item.description.includes("Package");
	})?.description;

	switch (packageName) {
		case PackageTypes[0]:
			return PackageTypes[0];
		case PackageTypes[1]:
			return PackageTypes[1];
		case PackageTypes[2]:
			return PackageTypes[2];
		case PackageTypes[3]:
			return PackageTypes[3];
		default:
			throw new Error("Package not found");
	}
};

export default getPackageName;
