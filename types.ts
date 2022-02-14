export interface Page {
	name: string;
	path: string;
}

export interface NavMenu {
	name: string;
	path?: string;
	sublinks?: Page[];
}
