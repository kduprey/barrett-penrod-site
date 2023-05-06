export * from "./bundles";
export * from "./sessions";

export interface Service {
	title: string;
	description: string;
	locations: string[];
	url: string[];
}
