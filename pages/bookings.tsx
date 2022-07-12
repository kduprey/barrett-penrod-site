import { LessonType, NextPageWithLayout } from "../types";
import VsLogo from "/public/vslogo.svg";
import Layout from "./layout";
import { packages, services } from "../data/services";
import Link from "next/link";

const Bookings: NextPageWithLayout = () => {
	return (
		<section className="flex flex-col items-center justify-evenly p-4">
			<div className="w-3/4 bg-white p-3 shadow-lg shadow-black md:w-1/4">
				<VsLogo />
			</div>
			<h2 className="py-6 text-center text-secondary">Services</h2>

			<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:space-y-0">
				{services.map((service) => {
					return (
						<div
							key={service.title}
							className="w-[18em] space-y-3 rounded-lg bg-secondary p-6 shadow-md"
						>
							<h4 className="text-center">{service.title}</h4>
							<p className="text-primary">
								{service.description}
							</p>
						</div>
					);
				})}
			</div>

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			<h2 className="pb-3 text-center text-secondary">Packages</h2>
			<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:space-x-6 md:space-y-0">
				{packages.map((lessonPackage) => {
					return (
						<div
							key={lessonPackage.title}
							className="flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md "
						>
							<h4 className="text-center">
								{lessonPackage.title}
							</h4>
							<p className="text-center text-primary">
								{lessonPackage.discount}
							</p>
							<p className="text-center text-3xl font-bold text-primary">
								${lessonPackage.price}
							</p>
							<button className="bg-primary text-secondary">
								Reserve Now!
							</button>
						</div>
					);
				})}
			</div>
			{/* <div className="flex flex-col items-center justify-center">
				<h2 className="py-3 text-center text-secondary">
					Book a <br /> Consultation Lesson!
				</h2>
				<a href="https://calendly.com/bpvoicestudio/consultation-lesson">
					<button>Reserve Now!</button>
				</a>
			</div> */}

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			<div className="flex flex-col items-center justify-center">
				<h2 className="pb-3 text-center text-secondary">
					Book an <br /> Individual Lesson!
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
	<Layout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</Layout>
);
