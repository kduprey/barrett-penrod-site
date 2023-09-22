"use client";

import { useState } from "react";
import { SidePanel } from "../Modals/SidePanel";
import { AboutStudioSection } from "../content/AboutStudioSection";
import { MoreAboutSection } from "../content/MoreAboutSection";

export const AboutStudio = (): JSX.Element => {
	const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);
	return (
		<>
			<SidePanel
				header="More About Me"
				isOpen={isMoreAboutOpen}
				setIsOpen={setIsMoreAboutOpen}
			>
				<MoreAboutSection />
			</SidePanel>
			<section className="">
				<AboutStudioSection />
				<div className="flex w-full justify-center pt-6">
					<button
						onClick={() => {
							setIsMoreAboutOpen(true);
						}}
						type="button"
					>
						Learn More
					</button>
				</div>
			</section>
		</>
	);
};
