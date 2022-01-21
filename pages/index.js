import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Home = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {}, []);

	return (
		<div>
			<Header
				title="Barrett Penrod - Actor & Voice Teacher"
				description="Site is under construction"
			/>

			<main className="flex flex-col min-h-screen bg-slate-100">
				{/* Navbar */}
				<Navbar activePage="Home" />

				{/* Hero Div */}
				<Hero />

				{/* Footer */}
				<Footer />
			</main>
		</div>
	);
};

export default Home;
