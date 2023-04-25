import { NextPageWithLayout, bundles } from "@bpvs/types";
import { useState } from "react";
import PackageModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";

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
			<h2 className="text-secondary py-6 text-center">Discount Packages</h2>
			<div className="flex w-full max-w-screen-lg  flex-row flex-wrap items-center justify-evenly">
				{bundles.map((bundle, index) => {
					return (
						<div
							key={bundle.title}
							className="withTransition bg-secondary m-2 flex flex-col items-center justify-center space-y-3 rounded-lg p-6 shadow-md hover:scale-105 hover:opacity-90 md:w-[18rem] lg:w-[22rem]"
						>
							<h4 className="text-primary text-center">{bundle.title}</h4>
							<p className="text-primary text-center">{bundle.discount}</p>
							<p className="text-primary text-center text-3xl font-bold">
								${bundle.price}
							</p>
							<button
								className="bg-primary text-secondary cursor-pointer"
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
