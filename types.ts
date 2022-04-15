import { Component } from "react";
import { Link } from "react-scroll";

export interface Page {
	name: string;
	path: string;
	scrollTo: boolean;
}

export interface NavMenu {
	name: string;
	path?: string;
	sublinks?: Page[];
}
