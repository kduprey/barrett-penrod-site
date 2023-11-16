import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { defaultDocumentNode } from "./defaultDocumentNode";
import { deskStructure, schemaTemplatesFilter } from "./deskStructure";
import * as schemas from "@/schemas";

const schemaTypes = Object.values(schemas);

export default defineConfig({
	name: "production",
	title: "BPVS - Production",
	basePath: "/production",
	projectId: "n8emrwer",
	dataset: "production",
	api: {
		projectId: "n8emrwer",
		dataset: "production",
	},
	plugins: [
		deskTool({
			structure: deskStructure,
			defaultDocumentNode,
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
		templates: schemaTemplatesFilter,
	},
});
