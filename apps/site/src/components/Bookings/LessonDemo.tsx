"use client";

import { useState } from "react";
import { SidePanel } from "../Modals/SidePanel";
import { DemosSection } from "../content/DemosSection";

export const LessonDemo = (): JSX.Element => {
	const [isDemosOpen, setIsDemosOpen] = useState(false);
	return (
		<>
			<SidePanel header="Demos" isOpen={isDemosOpen} setIsOpen={setIsDemosOpen}>
				<DemosSection />
			</SidePanel>
			<section>
				<div className="hidden md:block">
					<DemosSection />
				</div>
				<div className="flex flex-col items-center gap-3 py-3 md:hidden">
					<h3 className="text-center">Want to see a lesson?</h3>
					<button
						onClick={() => {
							setIsDemosOpen(true);
						}}
						type="button"
					>
						Watch Now!
					</button>
				</div>
			</section>
		</>
	);
};
