import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect } from "react";

interface SidePanelProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	header: string;
	children: React.ReactNode;
}

export const SidePanel = ({
	isOpen,
	setIsOpen,
	header,
	children,
}: SidePanelProps): JSX.Element => {
	const handleClose = (): void => {
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
			{isOpen ? (
				<div className="fixed top-[6em] left-0 z-[60] h-full ">
					<m.div
						animate={{
							opacity: "40%",
						}}
						className=" fixed inset-0 top-[6em] bg-secondary   "
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						onClick={handleClose}
						transition={{ duration: 0.3 }}
					/>

					{/* Modal Dialog */}
					<m.div
						animate={{
							x: 0,
						}}
						className="fixed right-0 z-[61] w-screen bg-primary pb-[12em] md:w-auto md:max-w-lg block"
						exit={{ x: "100%" }}
						initial={{ x: "100%" }}
						transition={{ duration: 0.3 }}
					>
						{/* Modal Header */}
						<div className="sticky z-[70] p-4 shadow-lg">
							<div
								className="absolute left-3 text-3xl text-secondary"
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

							<h1 className="text-center text-4xl">{header}</h1>
						</div>

						{/* Modal Body */}
						<div className=" h-[85vh] overflow-y-scroll p-6">{children}</div>
					</m.div>
				</div>
			) : null}
		</AnimatePresence>
	);
};
