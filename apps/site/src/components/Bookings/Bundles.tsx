import { bundles } from "@bpvs/types";
import { useState } from "react";
import BundleModal from "./BundleModal";

const Bundles = () => {
	const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section>
			<BundleModal
				isOpen={isBundleModalOpen}
				setIsOpen={setIsBundleModalOpen}
				selectedBundle={selectedBundle}
			/>
			<h2 className="text-secondary pb-6 text-center md:text-3xl lg:text-4xl xl:pt-5">
				Discount Packages
			</h2>
			<div className="grid gap-6 sm:grid-cols-2">
				{bundles.map((bundle, index) => (
						<div
							key={bundle.title}
							className="withTransition bg-secondary flex max-w-sm flex-col items-center justify-center space-y-3 rounded-lg p-6 shadow-md hover:scale-105 hover:opacity-90"
							onClick={() => {
								setIsBundleModalOpen(true);
								setselectedBundle(index);
							}}
						>
							<h4 className="text-primary text-center">
								{bundle.title}
							</h4>
							<p className="text-primary text-center">
								{bundle.discount}
							</p>
							<p className="text-primary text-center text-3xl font-bold">
								${bundle.price}
							</p>
							<button
								className="bg-primary text-secondary cursor-pointer"
								onClick={() => {
									setIsBundleModalOpen(true);
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
