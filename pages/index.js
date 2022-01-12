import { useEffect, useState } from "react";
import { Header, Navbar } from "./components";

const Home = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var time = setTimeout(() => {
			setDate(new Date());
		}, 1000);

		return () => clearTimeout(time);
	}, [date]);

	return (
		<div>
			<Header
				title="Barrett Penrod - Actor & Voice Teacher"
				description="Site is under construction"
			/>

			<main className="flex flex-col min-h-screen"></main>
		</div>
	);
};

export default Home;
