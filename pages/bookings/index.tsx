import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BundleModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";
import { bundles, services } from "../../data/services";
import { NextPageWithLayout } from "../../types";
import handleQueryParams from "../../utils/handleQueryParams";

type Props = {};

const Bookings: NextPageWithLayout = (props: Props) => {
	const router = useRouter();

	useEffect(() => {
		handleQueryParams(router.query);
	}, [router.query]);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section className="flex flex-col items-center justify-evenly p-4">
			<BundleModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				selectedBundle={selectedBundle}
			/>

			<Logo />

			<h2 className="py-6 pt-10 text-center text-secondary">Services</h2>

			<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:flex-wrap md:gap-6 md:space-y-0">
				{services.map((service) => {
					return (
						<div
							key={service.title}
							className="flex flex-col items-center justify-between rounded-lg bg-secondary p-8 shadow-md md:h-[20em] md:w-[22em] lg:h-[22em]"
						>
							<h5 className=" text-center">{service.title}</h5>
							<p className="my-auto text-center text-primary">
								{service.description}
							</p>
						</div>
					);
				})}
			</div>

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			<div className="flex flex-col items-center justify-center rounded-lg border-4 p-5">
				<h2 className="py-5 text-center text-secondary">
					Book a <br /> Free Consultation!
				</h2>

				<Link href="/bookings/consultation" passHref>
					<button>Schedule time with me</button>
				</Link>
			</div>

			<hr className="mt-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			<h2 className="py-10 text-center text-secondary">
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
								onClick={(e) => {
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

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			<div className="flex flex-col items-center justify-center">
				<h2 className="pb-3 text-center text-secondary">
					Book an <br /> Individual Session!
				</h2>
				<Link href="/bookings/individual">
					<button>Reserve Now!</button>
				</Link>
			</div>
		</section>
	);
};

export default Bookings;

Bookings.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
