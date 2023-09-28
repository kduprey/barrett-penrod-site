"use client";

import type { qr_code_logs as qrCodeLogs } from "@bpvs/db";
import axios from "axios";
import { useEffect } from "react";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import {
	AboutStudio,
	Bio,
	Bundles,
	ConsultationSession,
	IndividualSession,
	LessonDemo,
	Logo,
	Services,
} from "@/components";

// TODO: Implement barrell export for components

// const promoContentsSchema = z.object({
//   promoContents: z.array(
//     z.object({
//       headerForPromo: z.string().optional(),
//       promoSubheadingDescription: z.string().optional(),
//     })
//   ),
// });

// export const getStaticProps = async () => {
//   const QUERY = gql`
//     query PromoContents {
//       promoContents(stage: PUBLISHED) {
//         headerForPromo
//         promoSubheadingDescription
//       }
//     }
//   `;

//   const promoContentsResponse = await hygraphcms.request(QUERY);
//   const promoContents = promoContentsSchema.parse(promoContentsResponse);

//   return {
//     props: {
//       promoContents,
//     },
//   };
// };

// type Props = {
//   promoContents: {
//     headerForPromo: string;
//     promoSubheadingDescription: string;
//   }[];
// };

const Bookings = () => {
	const queryParams = useSearchParams();

	useEffect(() => {
		const handleQueryParams = async () => {
			if (queryParams.has("qr")) {
				const qrID = z.string().parse(queryParams.get("qr"));
				// Update QRDB
				const status = await axios.post<qrCodeLogs>(
					`${window.location.origin}/api/updateQRDB`,
					{
						qrID,
					}
				);

				console.info(status.data);
			}
		};
		void handleQueryParams();
	}, [queryParams]);

	return (
		<section className=" flex flex-col items-center justify-center gap-3 px-6">
			{/* Promo Section */}
			{/* {promoContents[0] && (
        <div className="flex flex-col items-center justify-center gap-3 p-3">
          <h1>{promoContents[0].headerForPromo}</h1>
          <h3 className="text-center">
            {promoContents[0].promoSubheadingDescription}
          </h3>
        </div>
      )} */}
			{/* Logo */}
			<div className="max-w-screen- py-5">
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
