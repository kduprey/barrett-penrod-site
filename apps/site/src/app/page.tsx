"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import headshot1 from "public/headshot1.jpg";
import headshot2 from "public/headshot2.jpg";
import headshot3 from "public/headshot3.jpg";
import headshot4 from "public/headshot4.jpg";
import headshot5 from "public/headshot5.jpg";
import headshot6 from "public/headshot6.jpg";

const images = [
	headshot1,
	headshot2,
	headshot3,
	headshot4,
	headshot5,
	headshot6,
];

const Page = () => {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	const slides = images.map((image, index) => (
		<CarouselSlide key={index}>
			<Image
				alt={`Image ${index}`}
				height={0}
				sizes="100vw"
				src={image}
				style={{ objectFit: "cover", height: "100%", width: "100%" }}
				width={0}
			/>
		</CarouselSlide>
	));

	return (
		<>
			{/* <PageBar /> */}

			{/* <SocialBar /> */}
			<section id="home">
				<Carousel
					height="75%"
					loop
					plugins={[autoplay.current]}
					slideSize="100%"
					w="40%"
					withControls={false}
					withIndicators
				>
					{slides}
				</Carousel>

				{/* Heading Text */}
				{/* <Headline /> */}

				{/* Headshot 1 */}
				{/* <div className="flex w-full flex-col items-center justify-center bg-slate-400 py-4 md:hidden">
				<Image
					alt="Barret Penrod"
					loading="lazy"
					placeholder="blur"
					src={headshot5}
				/>
			</div> */}

				{/* About Section */}

				{/* <About /> */}

				{/* Resume/Headshots */}

				{/* <Headshots />

			<div className="flex justify-center p-3">
				<hr className="h-1 w-3/4" />
			</div> */}

				{/* Resume */}
				{/* <div className="py-6 md:p-0" id="resume">
				<h1 className="text-center text-secondary">Resumé</h1>

				<ResumeTable />

				<div className="flex justify-center pb-6">
					<a
						className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
						data-cy="download-resume"
						href="https://files.kduprey.com/barrettpenrod/Barrett_Penrod_Resume.pdf"
					>
						Download Resume
					</a>
				</div>
			</div> */}

				{/* Showreel */}

				{/* <Showreel /> */}

				{/* Photos */}

				{/* <Photos /> */}

				{/* News */}

				{/* <News /> */}
			</section>
			{/* <Footer /> */}
		</>
	);
};

export default Page;
