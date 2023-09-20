import { useState } from "react";
import { Nav } from "./Navbar/Nav";
import { TitleBar } from "./Navbar/TitleBar";

export const PageBar = (): JSX.Element => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<>
			<TitleBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			<Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};
