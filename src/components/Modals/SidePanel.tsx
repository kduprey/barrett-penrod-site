import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect } from "react";

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	header: string;
	children: React.ReactNode;
};

const SidePanel = ({ isOpen, setIsOpen, header, children }: Props) => {
	const handleClose = () => {
		document.body.style.overflow = "unset";
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				// Modal Background
				<div className="fixed top-[6em] left-0 z-[60] h-full ">
					<m.div
						className=" fixed inset-0 top-[6em] bg-secondary   "
						initial={{ opacity: 0 }}
						animate={{
							opacity: "40%",
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={handleClose}
					></m.div>

					{/* Modal Dialog */}
					<m.div
						className={`fixed right-0 z-[61] w-screen bg-primary pb-[12em] md:w-auto md:max-w-lg ${
							isOpen ? "block" : "hidden"
						}`}
						initial={{ x: "100%" }}
						animate={{
							x: 0,
						}}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3 }}
					>
						{/* Modal Header */}
						<div className="sticky z-[70] p-4 shadow-lg">
							<div
								className="absolute left-3 text-3xl text-secondary"
								onClick={handleClose}
							>
								{/* Arrow */}
								<FontAwesomeIcon icon={faArrowLeft} />
							</div>

							<h1 className="text-center text-4xl">{header}</h1>
						</div>

						{/* Modal Body */}
						<div className="h-full h-[85vh] overflow-y-scroll p-6">
							{children}
						</div>
					</m.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default SidePanel;
