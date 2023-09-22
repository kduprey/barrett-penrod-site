"use client";

import { NextStudio } from "next-sanity/studio";
import { metadata } from "next-sanity/studio/metadata";
import Head from "next/head";
import { StudioLayout, StudioProvider } from "sanity";
import config from "@/config/sanity.config";

const Studio = () => {
	return (
		<>
			<Head>
				{Object.entries(metadata).map(([key, value]) => (
					<meta content={value} key={key} name={key} />
				))}
			</Head>
			<NextStudio config={config}>
				<StudioProvider config={config}>
					{/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
					<StudioLayout />
				</StudioProvider>
			</NextStudio>
		</>
	);
};

export default Studio;
