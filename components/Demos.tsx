import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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
						<h1 className="text-center">Demos</h1>
					</div>

					{/* Modal Interior */}
					<div className="about left-0 h-[80vh] space-y-3 overflow-scroll px-6 pt-4">
						<div>
							<iframe
								className="h-[200px] w-full md:h-[315px] md:w-[560px]"
								src="https://www.youtube.com/embed/rDrEJ7v3EUk"
								title="YouTube video player"
								frameBorder={0}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
							></iframe>
							<p className="py-2 text-center font-bold ">
								NATS Teaching Intern Program Demo
							</p>
							<p className="text-center font-medium">
								Client - Nick B.
							</p>
						</div>

						<h3 className="py-7 text-center">More to come!</h3>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Demos;
