import Image from "next/image";
import CornishLogo from "../../../public/collegeLogos/cornishLogo.png";
import NATSLogo from "../../../public/collegeLogos/natsLogo.png";
import NYULogo from "../../../public/collegeLogos/nyuLogo.jpg";
import SomaticVoicework from "../../../public/collegeLogos/somaticVoicework.jpg";

// TODO: Import content into CMS

const AboutStudioSection = () => (
	<div className="about mx-auto space-y-3 md:px-6 lg:max-w-4xl xl:max-w-6xl">
		<div className="flex gap-4">
			<div className=" max-w-2xl lg:max-w-screen-lg">
				<div className="flex w-full  flex-col space-y-2 lg:max-w-xl">
					<h2 className="md:text-2xl">My Philiosophy</h2>

					<p>
						Anyone can become a skilled singer. It&apos;s not about having
						talent. The price you pay to train your voice is attention, time,
						and commitment. If you really want it, I can help you achieve it.
					</p>
				</div>

				{/* Methodology */}
				<article className="space-y-2">
					<h2 className=" md:text-2xl">Methodology</h2>

					<p className="leading-relaxed">
						The methodology I utilize to teach singing is unique to the singing
						community. My method incorporates my training in contemporary and
						classic acting technique, Science informed vocal pedagogy, and Motor
						Learning Theory training. Blended together, these schools of
						performance instruction enable me to train aspiring singers of all
						levels of coordination, stylistic preference, and background.
					</p>
				</article>
			</div>

			<div className=" ml-4 flex min-w-[100px] flex-col items-center justify-between">
				{/* Logos */}
				<Image
					src={NYULogo}
					alt="NYU Logo"
					width={100}
					height={100}
					className="z-[55]"
				/>
				<Image src={CornishLogo} alt="Cornish Logo" width={100} height={100} />
				{/* Logos */}
				<Image
					src={NATSLogo}
					alt="NYU Logo"
					width={100}
					height={100}
					className="z-[55]"
				/>
				<Image
					src={SomaticVoicework}
					alt="Somatic Voicework"
					width={100}
					height={100}
				/>
			</div>
		</div>
	</div>
);

export default AboutStudioSection;
