import { useState } from "react";
import Nav from "./Navbar/Nav";
import TitleBar from "./Navbar/TitleBar";

const PageBar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false as boolean);

	return (
		<>
			<TitleBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			<Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default PageBar;
