import { useEffect, useState } from "react";
import Header from "./components/Header";

const Home = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var time = setTimeout(() => {
			setDate(new Date());
		}, 1000);

		return () => clearTimeout(time);
	}, [date]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-black dark:text-white">
			<Header
				title="Barrett Penrod - Actor & Voice Teacher"
				description="Site is under construction"
			/>

			<main>
				<h1 className="text-center text-4xl pb-2">
					Site is under construction
				</h1>
				<div className="dark:text-gray-300">
					<h3 className="text-center text-2xl">
						{date.toDateString()}
					</h3>
					<h3 className="text-center text-2xl">
						{date.toLocaleTimeString()}
					</h3>
				</div>
			</main>
		</div>
	);
};

export default Home;
