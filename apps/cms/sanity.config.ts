import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  deskStructure,
  documentActions,
  schemaTemplatesFilter,
} from "./config/deskStructure";
import { schemaTypes } from "./schemas";

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
      deskTool({
        structure: deskStructure,
      }),
      visionTool(),
    ],

    schema: {
      types: schemaTypes,
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
      deskTool({
        structure: deskStructure,
      }),
      visionTool(),
    ],

    schema: {
      types: schemaTypes,
      templates: schemaTemplatesFilter,
    },
    document: {
      actions: documentActions,
    },
  },
]);
