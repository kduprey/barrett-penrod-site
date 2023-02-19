import { useState } from "react";
import PackageModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import { bundles } from "../../data/services";
import { NextPageWithLayout } from "../../types/types";
import VsLogo from "/public/vslogo.svg";

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

			<div className="w-3/4 bg-white p-6 shadow-lg shadow-black md:w-1/4">
				<VsLogo />
			</div>
			<h2 className="py-6 text-center text-secondary">
				Discount Packages
			</h2>
			<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:space-x-6 md:space-y-0">
				{bundles.map((bundle, index) => {
					return (
						<div
							key={bundle.title}
							className="flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md "
						>
							<h4 className="text-center">{bundle.title}</h4>
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
					);
				})}
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
