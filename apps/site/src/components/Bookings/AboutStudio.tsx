import { useState } from "react";
import SidePanel from "../Modals/SidePanel";
import AboutStudioSection from "../content/AboutStudioSection";
import MoreAboutSection from "../content/MoreAboutSection";

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
        <AboutStudioSection />
        <div className="flex w-full justify-center pt-6">
          <button onClick={() => setIsMoreAboutOpen(true)}>Learn More</button>
        </div>
      </section>
    </>
  );
};

export default AboutStudio;
