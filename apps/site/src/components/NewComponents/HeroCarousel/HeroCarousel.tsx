"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
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

export const HeroCarousel = () => {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	const slides = images.map((image, index) => (
		<CarouselSlide key={image.src}>
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
	);
};
