import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import DemosSection from "../content/DemosSection";

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Demos = ({ isOpen, setIsOpen }: Props) => {
	const controls = useAnimation();
	const handleCloseDemos = () => {
		setIsOpen(false);
		document.body.style.overflow = "unset";
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
						<h1 className="text-center">Demos</h1>
					</div>

					{/* Modal Interior */}
					<div className="about left-0 h-[80vh] overflow-scroll">
						<DemosSection />
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Demos;
