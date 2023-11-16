import { HomeIcon } from "@sanity/icons";
import type { Rule } from "sanity";
import { defineType } from "sanity";

export const homeSchema = defineType({
	name: "home",
	title: "Home Page",
	icon: HomeIcon,
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: Rule) => Rule.required(),
		},
	],
});
