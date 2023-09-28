import { bundles } from "@bpvs/config";
import Link from "next/link";
import { Logo } from "@/components";

const Page = () => {
	return (
		<section className="flex flex-col items-center p-4">
			<div className="mx-auto max-w-[18rem]">
				<Logo />
			</div>
			<h2 className="py-6 text-center text-secondary">Discount Packages</h2>
			<div className="flex w-full max-w-screen-lg  flex-row flex-wrap items-center justify-evenly">
				{bundles.map((bundle, index) => (
					<div
						className="withTransition m-2 flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90 md:w-[18rem] lg:w-[22rem]"
						key={bundle.title}
					>
						<h4 className="text-center text-primary">{bundle.title}</h4>
						<p className="text-center text-primary">{bundle.discount}</p>
						<p className="text-center text-3xl font-bold text-primary">
							${bundle.price}
						</p>
						<Link href={`/bookings/bundles/${index}`} passHref>
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

export default Page;
