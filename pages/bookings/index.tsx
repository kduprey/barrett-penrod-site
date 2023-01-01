import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AboutStudioModal from "../../components/AboutStudioModal";
import BundleModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import Demos from "../../components/Demos";
import Logo from "../../components/Logo";
import { bundles, services } from "../../data/services";
import headshot2 from "../../public/headshot2.jpg";
import { NextPageWithLayout } from "../../types";
import handleQueryParams from "../../utils/handleQueryParams";

type Props = {};

const Bookings: NextPageWithLayout = (props: Props) => {
	const router = useRouter();

	useEffect(() => {
		handleQueryParams(router.query);
	}, [router.query]);

	const [isOpen, setIsOpen] = useState(false);
	const [isDemosOpen, setIsDemosOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section className={`container mx-auto px-6 sm:p-0 `}>
			<BundleModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				selectedBundle={selectedBundle}
			/>
			<Demos isOpen={isDemosOpen} setIsOpen={setIsDemosOpen} />
			<AboutStudioModal isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} />
			{/* Promo Section */}
			<div className="flex flex-col items-center justify-center gap-3 p-3">
				<h1>Promo Now!</h1>
				<h3 className="text-center">
					Promo description text... Lorem ipsum dolor sit amet
					consectetur adipisicing elit.
				</h3>
			</div>
			{/* Logo */}
			<div className="flex justify-center">
				<Logo />
			</div>
			{/* Headshot */}
			<div className="my-5 mx-auto w-full">
				<Image
					loading="lazy"
					placeholder="blur"
					src={headshot2}
					alt="Barret Penrod"
					className="rounded-xl"
				/>
			</div>

			{/* Bio & Philiosophy */}
			<div className=" flex flex-col gap-3">
				<h2 className="text-center">Philiosophy and Bio</h2>
				<p>
					Hello! Welcome to my studio page I realize that this visit
					to my website might be merely a brief stop for you on a
					journey to find a voice teacher that meets your needs.
					Whether you are new to working on your voice or a seasoned
					professional, I would love to introduce myself and offer
					what I can to assist you on your journey.
				</p>
				<h4>My Philiosophy</h4>

				<p>
					Anyone<span className="italic">*</span> can become a skilled
					singer. It&apos;s not about having talent. The price you pay
					to train your voice is attention, time, and commitment. If
					you really want it, I can help you achieve it.
				</p>
				<p className="text-justify text-xs italic text-gray-400">
					*I fully acknowledge that, however uncommon, there are vocal
					and neural pathologies that compromise functional use of the
					human voice beyond habilitative instruction using Motor
					Learning techniques. However, pathologies and neurological
					challenges may still be worked through, and I will do my
					best to guide and assist all who enter my studio.
				</p>
			</div>

			{/* Lesson Demo */}
			<div className="flex flex-col items-center gap-3 py-3">
				<h3 className="text-center">Want to see a lesson?</h3>
				<button onClick={() => setIsDemosOpen(true)}>Watch Now!</button>
			</div>

			{/* About The Studio */}
			<section className="flex flex-col items-center justify-center gap-3 p-3">
				<h3 className="text-center">
					Want to learn more about my studio?
				</h3>
				<button onClick={() => setIsAboutOpen(true)}>
					Learn More!
				</button>
			</section>

			{/* Services */}
			<section>
				<h2 className="pb-6 text-center text-secondary">Services</h2>
				<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:flex-wrap md:gap-6 md:space-y-0">
					{services.map((service) => {
						return (
							<div
								key={service.title}
								className="flex flex-col items-center justify-between rounded-lg bg-secondary p-8 shadow-md md:h-[20em] md:w-[22em] lg:h-[22em]"
							>
								<h5 className="text-center text-primary">
									{service.title}
								</h5>
								<p className="my-auto text-center text-primary">
									{service.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />
			{/* Consultation Section */}
			<div className="flex flex-col items-center justify-center">
				{/* Info Section */}
				<div className=" 2xl:1/2 flex flex-col items-center gap-3 rounded-lg bg-secondary p-8 md:w-5/6 lg:w-3/4">
					<h2 className="text-center text-primary sm:text-4xl lg:text-5xl">
						Book a 20 min <br /> FREE consultation
					</h2>
					<p className="text-justify text-primary ">
						A FREE 20 minute zoom meeting where you will meet me,
						discuss your goals, wants, and needs for your voice
						journey, and learn more about me, my methodology and
						teaching style. At the end of the consultation we will
						either book you for your first session, or you will
						leave with a list contact info for several of my
						colleagues who may be a closer match! Book your free
						consultation here today!
					</p>
				</div>
				{/* CTA Section */}
				<div className="flex flex-col items-center justify-center">
					<h3 className=" py-3 text-center text-secondary">
						Book a Free <br /> Consultation Today!
					</h3>

					<Link href="/bookings/consultation" passHref>
						<button>Book Now</button>
					</Link>
				</div>
			</div>
			<hr className="mt-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />

			{/* Discount Packages */}
			<section>
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
			</section>

			<hr className="my-6 h-1 w-full rounded-lg bg-slate-200 opacity-30" />
			<div className="flex flex-col items-center justify-center pb-6">
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
