import { gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BundleModal from "../../components/Bookings/BundleModal";
import BookingsLayout from "../../components/BookingsLayout";
import AboutStudioSection from "../../components/content/AboutStudioSection";
import DemosSection from "../../components/content/DemosSection";
import MoreAboutSection from "../../components/content/MoreAboutSection";
import Logo from "../../components/Logo";
import SidePanel from "../../components/Modals/SidePanel";
import { hygraphcms } from "../../config";
import { bundles, services } from "../../data/services";
import headshot2 from "../../public/headshot2.jpg";
import { NextPageWithLayout } from "../../types/types";
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

	const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
	const [isDemosOpen, setIsDemosOpen] = useState(false);
	const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);
	const [selectedBundle, setselectedBundle] = useState<number>();

	return (
		<section
			className={` flex flex-col items-center justify-center gap-3 px-6`}
		>
			<BundleModal
				isOpen={isBundleModalOpen}
				setIsOpen={setIsBundleModalOpen}
				selectedBundle={selectedBundle}
			/>
			<SidePanel
				isOpen={isDemosOpen}
				setIsOpen={setIsDemosOpen}
				header="Demos"
			>
				<DemosSection />
			</SidePanel>
			<SidePanel
				isOpen={isMoreAboutOpen}
				setIsOpen={setIsMoreAboutOpen}
				header="More About Me"
			>
				<MoreAboutSection />
			</SidePanel>
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
			<div className=" flex w-full max-w-screen-lg flex-col items-center justify-center  md:flex-row md:items-start md:justify-evenly md:gap-5 lg:max-w-screen-xl ">
				{/* Headshot */}
				<div className=" max-w-[20em]">
					<Image
						loading="lazy"
						placeholder="blur"
						src={headshot2}
						alt="Barret Penrod"
						className="rounded-xl"
					/>
				</div>
				<div className="flex w-full max-w-md flex-col gap-5 lg:max-w-xl">
					<h2>Welcome!</h2>
					<p>
						Thank you for visiting my studio page. I began the
						Barrett Penrod Voice Studio officially in June 2022,
						after completing my dual graduate degrees at New York
						University. I&rsquo;ll be up front with you - I&rsquo;m
						not like most other voice teachers. I&rsquo;m not going
						to mold you into a packaged perfect sound, I&rsquo;m not
						going to push you towards a particular method, and
						I&rsquo;m not ever at any point going to tell you that
						you sound bad. What I am going to do is give you the
						tools to become truly skilled, no matter what your
						ability is at the start. If you&rsquo;re a pro and happy
						with your sound, then we&rsquo;re going to keep your
						voice how you need it to be. If you wanna change, then
						we&rsquo;ll create the way you want to be heard. If
						you&rsquo;re a beginner, then you&rsquo;ll learn the
						tools that will open doors you never thought possible.
						Book in with me, and let&rsquo;s hear you do wonders!
					</p>
				</div>
			</div>

			<hr className="my-3 w-full rounded bg-secondary p-1" />

			{/* About The Studio */}
			<section className="">
				<AboutStudioSection />
				<div className="flex w-full justify-center pt-6">
					<button onClick={() => setIsMoreAboutOpen(true)}>
						Learn More
					</button>
				</div>
			</section>

			<hr className="my-3 w-full rounded bg-secondary p-1" />
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
			<hr className="my-3 w-full rounded bg-secondary p-1" />

			{/* Services */}
			<section className="flex flex-wrap items-center justify-center gap-5 2xl:h-full 2xl:w-full 2xl:justify-evenly">
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
				<div className=" flex h-full max-w-md flex-col gap-3 rounded-lg bg-secondary p-8 md:max-w-lg lg:max-w-xl  2xl:justify-between ">
					{/* Info Section */}
					<h2 className="text-center text-primary md:text-3xl lg:text-4xl">
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
					<Link href="/bookings/consultation" passHref>
						<button className="mx-auto bg-primary text-secondary">
							Book Now
						</button>
					</Link>
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
									setIsBundleModalOpen(true);
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
										setIsBundleModalOpen(true);
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
