import { useState } from "react";
import SidePanel from "../Modals/SidePanel";
import AboutStudioContent from "../content/AboutStudioSection";
import MoreAboutSection from "../content/MoreAboutSection";

// TODO: rename component to AboutStudioSection

const AboutStudio = () => {
	const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);
	return (
		<>
			<SidePanel
				isOpen={isMoreAboutOpen}
				setIsOpen={setIsMoreAboutOpen}
				header="More About Me"
			>
				<MoreAboutSection />
			</SidePanel>
			<section className="">
				<AboutStudioContent />
				<div className="flex w-full justify-center pt-6">
					<button onClick={() => setIsMoreAboutOpen(true)}>
						Learn More
					</button>
				</div>
			</section>
		</>
	);
};

export default AboutStudio;
