import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import CornishLogo from "../public/collegeLogos/cornishLogo.png";
import CornishLogo2 from "../public/collegeLogos/cornishLogo2.png";
import NATSLogo from "../public/collegeLogos/natsLogo.png";
import NYULogo from "../public/collegeLogos/nyuLogo.jpg";

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutStudioModal = ({ isOpen, setIsOpen }: Props) => {
	const controls = useAnimation();
	const handleCloseDemos = () => {
		setIsOpen(false);
		document.body.style.overflow = "unset";
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			controls.start({
				opacity: 1,
				x: 0,
				transition: { duration: 0.7 },
			});
		}
	}, [isOpen, controls]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.section
					animate={controls}
					initial={{ opacity: 0, x: "100%" }}
					exit={{
						opacity: 0,
						x: "100%",
						transition: { duration: 0.7 },
					}}
					className={`fixed top-[5.5em] left-0 z-[61] h-screen w-full bg-primary ${
						isOpen ? "block" : "hidden"
					}`}
				>
					{/* Modal Header */}
					<div className="sticky z-[70] flex justify-center bg-primary py-3 shadow-lg">
						<div className=" absolute left-3 text-3xl text-secondary">
							{/* Arrow */}
							<FontAwesomeIcon
								icon={faArrowLeft}
								onClick={handleCloseDemos}
							/>
						</div>
						<h1 className="text-center">About the Studio</h1>
					</div>
					{/* Modal Interior */}
					<div className="about left-0 h-[80vh] space-y-3 overflow-scroll px-6 pt-4">
						<div className="flex justify-evenly">
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
							<h2 className="text-center">Methodology</h2>

							<h3 className="font-medium">Overview</h3>
							<p className="leading-relaxed">
								The methodology I utilize to teach singing is
								unique to the singing community. My method
								incorporates my training in contemporary and
								classic acting technique, Science informed vocal
								pedagogy, and Motor Learning Theory training.
								Blended together, these schools of performance
								instruction enable me to train aspiring singers
								of all levels of coordination, stylistic
								preference, and background.
							</p>

							<h3 className="font-medium">
								Technique - Style - Performance
							</h3>

							<p className="leading-relaxed">
								My methodology addresses the three primary
								components of singing:
								<ul className=" list-inside list-decimal">
									<li>
										<i>Technique</i> - how we physically and
										mentally coordinate our mind and body in
										order to create the sounds we call
										singing.
									</li>
									<li>
										<i>Style</i> - what we actually do with
										our technique to make our singing unique
										or accurate to a specific musical genre.
									</li>
									<li>
										<i>Performance</i> - the artistic,
										dramatic, and emotional connection and
										delivery of singing.
									</li>
								</ul>
							</p>
						</article>

						{/* Specialisations/Interests */}
						<article className="space-y-2">
							<h2 className="text-center">
								Specialisations/Interests
							</h2>

							<p>
								Though I am a skilled instructor, I do have
								greater experience in some particular areas than
								others. These are as follows:
							</p>
							<ul className="list-inside list-disc">
								<li>
									Technical & Stylistic Speciality
									<ul className="list-inside list-square indent-6">
										<li>
											Practice Methodology - How to
											actually practice
										</li>
										<li>Musical Theater Voice - Classic</li>
										<li>
											Musical Theater Voice - Contemporary
										</li>
										<li>
											Contemporary Commercial Music (pop,
											rock, country, etc.)
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
										<li>
											Athletes - professional and minor
										</li>
										<li>Tenors</li>
										<li>
											Large Voices - Soprano, Mezzo,
											Tenor, Baritone
										</li>
										<li>Trans Voices</li>
									</ul>
								</li>
							</ul>
							<p>
								I am comfortable working outside of these areas,
								however I possess special insight to these
								particular groups of clientele. If you do not
								identify with these categories, not a problem!
								At the end of the day, your success and
								satisfaction with your voice is my priority.{" "}
							</p>
						</article>

						{/* Education & Training */}
						<article className="space-y-2">
							<h2 className="text-center">
								Education & Training
							</h2>
							<ul className="list-inside list-disc">
								<li>
									Bachelors of Fine Arts in Theater - Cornish
									College of the Arts
								</li>
								<li>
									Masters of Music: Musical Theater Vocal
									Performance
								</li>
								<li>
									Post Master&#39;s Advanced Certificate:
									Vocal Pedagogy
								</li>
								<li>Somatic Voicework: Level I Completion</li>
							</ul>
						</article>

						{/* Notable Mentors */}
						<article className="space-y-2">
							<h2 className="text-center">Notable Mentors</h2>
							<ul className="list-inside list-disc">
								<li>
									Dr. Errik M. Hood
									<ul className="list-inside list-square indent-6">
										<li>
											NYU Vocal Performance - Program
											Director
										</li>
									</ul>
								</li>
								<li>
									Candice Donehoo Pullam
									<ul className="list-inside list-square indent-6">
										<li>
											Cornish College of the Arts - Voice
											Faculty
										</li>
										<li>Broadway alum</li>
									</ul>
								</li>
								<li>
									Tylee Ross
									<ul className="list-inside list-square indent-6">
										<li>
											NYC Based Singing Voice Specialist
										</li>
										<li>Broadway alum</li>
									</ul>
								</li>
								<li>
									Dr. Justin John Moniz
									<ul className="list-inside list-square indent-6">
										<li>
											NYU Vocal Performance - Director of
											Vocal Pedagogy
										</li>
									</ul>
								</li>
							</ul>
						</article>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default AboutStudioModal;
