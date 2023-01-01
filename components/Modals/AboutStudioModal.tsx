import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CornishLogo from "../../public/collegeLogos/cornishLogo.png";
import CornishLogo2 from "../../public/collegeLogos/cornishLogo2.png";
import NATSLogo from "../../public/collegeLogos/natsLogo.png";
import NYULogo from "../../public/collegeLogos/nyuLogo.jpg";
import AboutStudioSection from "../content/AboutStudioSection";

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutStudioModal = ({ isOpen, setIsOpen }: Props) => {
	const controls = useAnimation();
	const handleCloseDemos = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		if (windowWidth > 768) {
			document.body.style.overflow = "auto";
			setIsOpen(false);
		}
	}, [windowWidth, setIsOpen]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowX = "hidden";
			document.body.style.overflowY = "hidden";
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
					className={`fixed top-[5.5em] left-0 z-[61] h-screen w-full bg-primary md:hidden ${
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
					<div className="left-0 h-[80vh] overflow-scroll">
						<AboutStudioSection />
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default AboutStudioModal;
