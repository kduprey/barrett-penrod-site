import { gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BundleModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import AboutStudioSection from "../../components/content/AboutStudioSection";
import DemosSection from "../../components/content/DemosSection";
import Logo from "../../components/Logo";
import AboutStudioModal from "../../components/Modals/AboutStudioModal";
import Demos from "../../components/Modals/DemosModal";
import { hygraphcms } from "../../config";
import { bundles, services } from "../../data/services";
import headshot2 from "../../public/headshot2.jpg";
import { NextPageWithLayout } from "../../types";
import handleQueryParams from "../../utils/handleQueryParams";

export const getStaticProps = async () => {
	const QUERY = gql`
		query PromoContents {
			promoContents(stage: PUBLISHED) {
				headerForPromo
				promoSubheadingDescription
			}
		}
	`;

	const { promoContents } = await hygraphcms.request(QUERY);

	return {
		props: {
			promoContents,
		},
	};
};

type Props = {
	promoContents: {
		headerForPromo: string;
		promoSubheadingDescription: string;
	}[];
};

const Bookings: NextPageWithLayout = ({ promoContents }: Props) => {
	const router = useRouter();

	useEffect(() => {
		handleQueryParams(router.query);
	}, [router.query]);

	const [isOpen, setIsOpen] = useState(false);
	const [isDemosOpen, setIsDemosOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section
			className={` flex flex-col items-center justify-center gap-3 px-4`}
		>
			<BundleModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				selectedBundle={selectedBundle}
			/>
			<Demos isOpen={isDemosOpen} setIsOpen={setIsDemosOpen} />
			<AboutStudioModal isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} />
			{/* Promo Section */}
			{promoContents[0] && (
				<div className="flex flex-col items-center justify-center gap-3 p-3">
					<h1>{promoContents[0].headerForPromo}</h1>
					<h3 className="text-center">
						{promoContents[0].promoSubheadingDescription}
					</h3>
				</div>
			)}
			{/* Logo */}
			<div className="w-full max-w-[25em] py-5">
				<Logo />
			</div>

			{/* Bio & Philiosophy */}
			<div className=" flex w-full flex-col items-center justify-center gap-3 md:flex-row md:justify-evenly md:gap-5 md:px-8">
				{/* Headshot */}
				<div className="mt-5 max-w-[20em]">
					<Image
						loading="lazy"
						placeholder="blur"
						src={headshot2}
						alt="Barret Penrod"
						className="rounded-xl"
					/>
				</div>
				<div className="flex max-w-md flex-col gap-3 lg:max-w-xl">
					<h2 className="text-center">Welcome!</h2>
					<p>
						Hello! Welcome to my studio page I realize that this
						visit to my website might be merely a brief stop for you
						on a journey to find a voice teacher that meets your
						needs. Whether you are new to working on your voice or a
						seasoned professional, I would love to introduce myself
						and offer what I can to assist you on your journey.
					</p>
					<h4>My Philiosophy</h4>

					<p>
						Anyone<span className="italic">*</span> can become a
						skilled singer. It&apos;s not about having talent. The
						price you pay to train your voice is attention, time,
						and commitment. If you really want it, I can help you
						achieve it.
					</p>
					<p className="text-justify text-xs italic text-gray-400">
						*I fully acknowledge that, however uncommon, there are
						vocal and neural pathologies that compromise functional
						use of the human voice beyond habilitative instruction
						using Motor Learning techniques. However, pathologies
						and neurological challenges may still be worked through,
						and I will do my best to guide and assist all who enter
						my studio.
					</p>
				</div>
			</div>

			{/* About The Studio */}
			<section className="">
				<div className="hidden md:block">
					<AboutStudioSection />
				</div>
				<div className="flex flex-col items-center justify-center gap-3 p-3 md:hidden">
					<h3 className="text-center">
						Want to learn more about my studio?
					</h3>
					<button onClick={() => setIsAboutOpen(true)}>
						Learn More!
					</button>
				</div>
			</section>
			{/* Lesson Demo */}
			<section>
				<div className="hidden md:block">
					<DemosSection />
				</div>
				<div className="flex flex-col items-center gap-3 py-3 md:hidden">
					<h3 className="text-center">Want to see a lesson?</h3>
					<button onClick={() => setIsDemosOpen(true)}>
						Watch Now!
					</button>
				</div>
			</section>

			{/* Services */}
			<section className="2xl:flex 2xl:h-full 2xl:w-full  2xl:justify-evenly">
				<div>
					<h2 className="pb-6 text-center text-secondary">
						Services
					</h2>
					<div className="grid justify-center gap-6 sm:grid-cols-2">
						{services.map((service) => {
							return (
								<div
									key={service.title}
									className="withTransition flex max-w-sm origin-center transform flex-col items-center rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90"
								>
									<h3 className="text-center text-lg leading-6 text-primary md:text-2xl md:tracking-tight">
										{service.title}
									</h3>
									<p className="my-auto text-center text-primary md:text-lg">
										{service.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Consultation Section */}
				<div className=" h-full py-8 2xl:justify-between 2xl:py-0">
					{/* Info Section */}
					<div className="  flex max-w-md flex-col  gap-3 rounded-lg bg-secondary p-8 md:max-w-lg lg:max-w-xl">
						<h2 className="text-center text-primary md:text-3xl lg:text-4xl">
							Book a 20 min <br /> FREE consultation
						</h2>
						<p className="text-justify text-primary ">
							A FREE 20 minute zoom meeting where you will meet
							me, discuss your goals, wants, and needs for your
							voice journey, and learn more about me, my
							methodology and teaching style. At the end of the
							consultation we will either book you for your first
							session, or you will leave with a list contact info
							for several of my colleagues who may be a closer
							match! Book your free consultation here today!
						</p>
					</div>
					{/* CTA Section */}
					<div className="flex flex-col items-center justify-center ">
						<h3 className=" py-5 text-center text-secondary">
							Book a Free <br /> Consultation Today!
						</h3>

						<Link href="/bookings/consultation" passHref>
							<button>Book Now</button>
						</Link>
					</div>
				</div>
			</section>

			{/* Discount Packages */}
			<section>
				<h2 className="pb-6 text-center text-secondary md:text-3xl lg:text-4xl xl:pt-5">
					Discount Packages
				</h2>
				<div className="grid gap-6 sm:grid-cols-2">
					{bundles.map((bundle, index) => {
						return (
							<div
								key={bundle.title}
								className="withTransition flex max-w-sm flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90"
								onClick={(e) => {
									setIsOpen(true);
									setselectedBundle(index);
								}}
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
			<div className="flex flex-col items-center justify-center py-6">
				<h2 className="pb-3 text-center text-secondary md:text-3xl lg:text-4xl">
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
