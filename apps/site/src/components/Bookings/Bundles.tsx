import { bundles } from "@bpvs/config";
import Link from "next/link";

export const Bundles = (): JSX.Element => {
	return (
		<section>
			<h2 className="pb-6 text-center text-secondary md:text-3xl lg:text-4xl xl:pt-5">
				Discount Packages
			</h2>
			<div className="grid gap-6 sm:grid-cols-2">
				{bundles.map((bundle, index) => (
					<div
						className="withTransition flex max-w-sm flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90"
						key={bundle.title}
					>
						<h4 className="text-center text-primary">{bundle.title}</h4>
						<p className="text-center text-primary">{bundle.discount}</p>
						<p className="text-center text-3xl font-bold text-primary">
							${bundle.price}
						</p>
						<Link href={`/bookings/bundles/${index}`}>
							<button
								className="cursor-pointer bg-primary text-secondary"
								type="button"
							>
								Reserve Now!
							</button>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};
