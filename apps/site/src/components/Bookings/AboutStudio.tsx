import AboutStudioContent from "components/content/AboutStudioSection";
import MoreAboutSection from "components/content/MoreAboutSection";
import SidePanel from "components/Modals/SidePanel";
import { useState } from "react";

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
