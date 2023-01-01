import Image from "next/image";
import CornishLogo from "../../public/collegeLogos/cornishLogo.png";
import CornishLogo2 from "../../public/collegeLogos/cornishLogo2.png";
import NATSLogo from "../../public/collegeLogos/natsLogo.png";
import NYULogo from "../../public/collegeLogos/nyuLogo.jpg";

type Props = {};

const AboutStudioSection = (props: Props) => {
	return (
		<div className="about mx-auto space-y-3 px-6 pt-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
			<div className="flex items-center justify-evenly ">
				{/* Logos */}
				<Image
					src={NYULogo}
					alt="NYU Logo"
					width={200}
					height={100}
					className="z-[55]"
				/>
				<Image
					src={CornishLogo}
					alt="Cornish Logo"
					width={100}
					height={100}
				/>
			</div>

			{/* Methodology */}
			<article className="space-y-2">
				<h2 className="text-center md:text-3xl">Methodology</h2>

				<h3 className="font-medium md:text-2xl">Overview</h3>
				<p className="leading-relaxed">
					The methodology I utilize to teach singing is unique to the
					singing community. My method incorporates my training in
					contemporary and classic acting technique, Science informed
					vocal pedagogy, and Motor Learning Theory training. Blended
					together, these schools of performance instruction enable me
					to train aspiring singers of all levels of coordination,
					stylistic preference, and background.
				</p>

				<h3 className="font-medium md:text-2xl">
					Technique - Style - Performance
				</h3>

				<p className="leading-relaxed">
					My methodology addresses the three primary components of
					singing:
				</p>

				<ul className=" list-inside list-decimal">
					<li>
						<i>Technique</i> - how we physically and mentally
						coordinate our mind and body in order to create the
						sounds we call singing.
					</li>
					<li>
						<i>Style</i> - what we actually do with our technique to
						make our singing unique or accurate to a specific
						musical genre.
					</li>
					<li>
						<i>Performance</i> - the artistic, dramatic, and
						emotional connection and delivery of singing.
					</li>
				</ul>
			</article>

			{/* Specialisations/Interests */}
			<article className="space-y-2">
				<h2 className="text-center md:text-3xl">
					Specialisations/Interests
				</h2>

				<p>
					Though I am a skilled instructor, I do have greater
					experience in some particular areas than others. These are
					as follows:
				</p>
				<ul className="list-inside list-disc">
					<li>
						Technical & Stylistic Speciality
						<ul className="list-inside list-square indent-6">
							<li>
								Practice Methodology - How to actually practice
							</li>
							<li>Musical Theater Voice - Classic</li>
							<li>Musical Theater Voice - Contemporary</li>
							<li>
								Contemporary Commercial Music (pop, rock,
								country, etc.)
							</li>
						</ul>
					</li>
					<li>
						Client Type Specialty
						<ul className="list-inside list-square indent-6">
							<li>Musical Theatre Actors</li>
							<li>Recording Artists</li>
							<li>Stage and Screen Actors</li>
							<li>Dancers</li>
							<li>Athletes - professional and minor</li>
							<li>Tenors</li>
							<li>
								Large Voices - Soprano, Mezzo, Tenor, Baritone
							</li>
							<li>Trans Voices</li>
						</ul>
					</li>
				</ul>
				<p>
					I am comfortable working outside of these areas, however I
					possess special insight to these particular groups of
					clientele. If you do not identify with these categories, not
					a problem! At the end of the day, your success and
					satisfaction with your voice is my priority.{" "}
				</p>
			</article>

			{/* Education & Training */}
			<article className="space-y-2">
				<h2 className="text-center md:text-3xl">
					Education & Training
				</h2>
				<ul className="list-inside list-disc">
					<li>
						Bachelors of Fine Arts in Theater - Cornish College of
						the Arts
					</li>
					<li>Masters of Music: Musical Theater Vocal Performance</li>
					<li>
						Post Master&#39;s Advanced Certificate: Vocal Pedagogy
					</li>
					<li>Somatic Voicework: Level I Completion</li>
				</ul>
			</article>

			<div className="flex justify-evenly">
				{/* Logos */}
				<Image
					src={NATSLogo}
					alt="NYU Logo"
					width={100}
					height={100}
					className="z-[55]"
				/>
				<Image
					src={CornishLogo2}
					alt="Cornish Logo"
					width={100}
					height={100}
				/>
			</div>

			{/* Notable Mentors */}
			<article className="space-y-2">
				<h2 className="text-center md:text-3xl">Notable Mentors</h2>
				<ul className="list-inside list-disc">
					<li>
						Dr. Errik M. Hood
						<ul className="list-inside list-square indent-6">
							<li>NYU Vocal Performance - Program Director</li>
						</ul>
					</li>
					<li>
						Candice Donehoo Pullam
						<ul className="list-inside list-square indent-6">
							<li>Cornish College of the Arts - Voice Faculty</li>
							<li>Broadway alum</li>
						</ul>
					</li>
					<li>
						Tylee Ross
						<ul className="list-inside list-square indent-6">
							<li>NYC Based Singing Voice Specialist</li>
							<li>Broadway alum</li>
						</ul>
					</li>
					<li>
						Dr. Justin John Moniz
						<ul className="list-inside list-square indent-6">
							<li>
								NYU Vocal Performance - Director of Vocal
								Pedagogy
							</li>
						</ul>
					</li>
				</ul>
			</article>
		</div>
	);
};

export default AboutStudioSection;
