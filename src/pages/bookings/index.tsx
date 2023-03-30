import AboutStudio from "components/Bookings/AboutStudio";
import Bio from "components/Bookings/Bio";
import ConsultationSession from "components/Bookings/ConsultationSession";
import IndividualSession from "components/Bookings/IndividualSession";
import LessonDemo from "components/Bookings/LessonDemo";
import Services from "components/Bookings/Services";
import { hygraphcms } from "config/index";
import { gql } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { z } from "zod";
import Bundles from "../../components/Bookings/Bundles";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";
import { NextPageWithLayout } from "../../types/types";
import handleQueryParams from "../../utils/handleQueryParams";

const promoContentsSchema = z.object({
promoContents: z.array(z.object({
  headerForPromo: z.string().optional(),
  promoSubheadingDescription: z.string().optional(),
}))});

export const getStaticProps = async () => {
	const QUERY = gql`
		query PromoContents {
			promoContents(stage: PUBLISHED) {
				headerForPromo
				promoSubheadingDescription
			}
		}
	`;

	const promoContentsResponse  = await hygraphcms.request(QUERY);
	const promoContents =  promoContentsSchema.parse(promoContentsResponse);

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

	return (
		<section
			className={` flex flex-col items-center justify-center gap-3 px-6`}
		>
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
			<Bio />

			<hr className="my-3 w-full rounded bg-secondary p-1" />

			{/* About The Studio */}
			<AboutStudio />

			<hr className="my-3 w-full rounded bg-secondary p-1" />
			{/* Lesson Demo */}
			<LessonDemo />

			<hr className="my-3 w-full rounded bg-secondary p-1" />

			{/* Services */}
			<section className="flex flex-wrap items-center justify-center gap-5 2xl:h-full 2xl:w-full 2xl:justify-evenly">
				<Services />

				{/* Consultation Section */}
				<ConsultationSession />
			</section>

			{/* Discount Packages */}
			<Bundles />

			<IndividualSession />
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
