import Link from "next/link";

const IndividualSession = () => {
	return (
		<div className="flex flex-col items-center justify-center py-6">
			<h2 className="text-secondary pb-3 text-center md:text-3xl lg:text-4xl">
				Book an <br /> Individual Session!
			</h2>
			<Link href="/bookings/individual">
				<button>Reserve Now!</button>
			</Link>
		</div>
	);
};

export default IndividualSession;
