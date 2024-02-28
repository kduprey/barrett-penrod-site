import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { homeSchema } from "@/schemas";
import {
	deskStructure,
	documentActions,
	schemaTemplatesFilter,
} from "@/config";

export default defineConfig([
	{
		name: "production",
		title: "Barrett Penrod Studio - Production",
		basePath: "/production",
		projectId: "n8emrwer",
		dataset: "production",
		api: {
			projectId: "n8emrwer",
			dataset: "production",
		},
		plugins: [
			structureTool({
				structure: deskStructure,
			}),
			visionTool(),
		],

		schema: {
			types: [homeSchema],
			templates: schemaTemplatesFilter,
		},
		document: {
			actions: documentActions,
		},
	},
	{
		name: "staging",
		title: "Barrett Penrod Studio - Staging",
		basePath: "/staging",
		projectId: "n8emrwer",
		dataset: "staging",
		api: {
			projectId: "n8emrwer",
			dataset: "staging",
		},
		plugins: [
			structureTool({
				structure: deskStructure,
			}),
			visionTool(),
		],

		schema: {
			types: [homeSchema],
			templates: schemaTemplatesFilter,
		},
		document: {
			actions: documentActions,
		},
	},
]);
