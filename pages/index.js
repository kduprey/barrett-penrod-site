import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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

			<main className="flex flex-col min-h-screen bg-slate-100">
				<Navbar activePage="home" />
			</main>
		</div>
	);
};

export default Home;
