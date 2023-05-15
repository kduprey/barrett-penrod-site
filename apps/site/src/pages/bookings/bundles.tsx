import { useState } from "react";
import PackageModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";
import { bundles } from "../../data/services";
import { NextPageWithLayout } from "../../types/types";

const Bundles: NextPageWithLayout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section className="flex flex-col items-center p-4">
			<PackageModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				selectedBundle={selectedBundle}
			/>

			<div className="mx-auto max-w-[18rem]">
				<Logo />
			</div>
			<h2 className="py-6 text-center text-secondary">
				Discount Packages
			</h2>
			<div className="flex w-full max-w-screen-lg  flex-row flex-wrap items-center justify-evenly">
				{bundles.map((bundle, index) => (
						<div
							key={bundle.title}
							className="withTransition m-2 flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90 md:w-[18rem] lg:w-[22rem]"
						>
							<h4 className="text-center text-primary">
								{bundle.title}
							</h4>
							<p className="text-center text-primary">
								{bundle.discount}
							</p>
							<p className="text-center text-3xl font-bold text-primary">
								${bundle.price}
							</p>
							<button
								className="cursor-pointer bg-primary text-secondary"
								onClick={() => {
									setIsOpen(true);
									setselectedBundle(index);
								}}
							>
								Reserve Now!
							</button>
						</div>
					))}
			</div>
		</section>
	);
};

export default Bundles;

Bundles.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
