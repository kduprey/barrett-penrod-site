export interface Page {
	name: string;
	path: string;
}

export interface NavMenu {
	name: string;
	sublinks: Page[];
}
