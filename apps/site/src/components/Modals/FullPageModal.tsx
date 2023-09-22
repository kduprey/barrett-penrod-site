"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion as m, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface FullPageModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	header: string;
	children: React.ReactNode;
}

const FullPageModal = ({
	isOpen,
	setIsOpen,
	header,
	children,
}: FullPageModalProps): JSX.Element => {
	const controls = useAnimation();
	const handleClose = (): void => {
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
		const startAnimation = async (): Promise<void> => {
			await controls.start({
				opacity: 1,
				x: 0,
				transition: { duration: 0.7 },
			});
		};

		if (isOpen) {
			document.body.style.overflow = "hidden";
			void startAnimation();
		}
	}, [isOpen, controls]);

	return (
		<AnimatePresence>
			{isOpen ? (
				<m.section
					animate={controls}
					className="fixed top-[5.5em] left-0 z-[61] h-screen w-full bg-primary block"
					exit={{
						opacity: 0,
						x: "100%",
						transition: { duration: 0.7 },
					}}
					initial={{ opacity: 0, x: "100%" }}
				>
					{/* Modal Header */}
					<div className="sticky z-[70] flex justify-center bg-primary py-3 shadow-lg">
						<div
							className=" absolute left-3 text-3xl text-secondary"
							onClick={handleClose}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleClose();
								}
							}}
							role="button"
							tabIndex={0}
						>
							{/* Arrow */}
							<FontAwesomeIcon icon={faArrowLeft} />
						</div>
						<h1 className="text-center">{header}</h1>
					</div>

					{/* Modal Interior */}
					<div className="left-0 h-[80vh] overflow-scroll">{children}</div>
				</m.section>
			) : null}
		</AnimatePresence>
	);
};

export default FullPageModal;
