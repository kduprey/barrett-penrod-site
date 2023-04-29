import { useState } from "react";
import SidePanel from "../Modals/SidePanel";
import DemosSection from "../content/DemosSection";

const LessonDemo = () => {
	const [isDemosOpen, setIsDemosOpen] = useState(false);
	return (
		<>
			<SidePanel
				isOpen={isDemosOpen}
				setIsOpen={setIsDemosOpen}
				header="Demos"
			>
				<DemosSection />
			</SidePanel>
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
		</>
	);
};

export default LessonDemo;
