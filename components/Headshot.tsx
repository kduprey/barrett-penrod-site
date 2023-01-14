import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = {
	imageProps: ImageProps;
};

const Headshot = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`fixed left-0 z-30 h-screen w-screen cursor-pointer bg-slate-600 transition-all duration-300 ease-in-out ${
					isOpen ? "top-0 opacity-60" : "-top-full opacity-0"
				}`}
				data-cy="headshot-overlay"
			></div>
			<div
				className={`fixed left-0 right-0 z-40 mx-auto w-2/3 rounded-lg bg-secondary py-4 px-4 transition-all duration-300 ease-in-out md:w-[35%] ${
					isOpen ? "top-1/4 md:top-[20%]" : "-top-full "
				}`}
				data-cy="headshot-modal"
			>
				<Image
					loading="lazy"
					placeholder="blur"
					{...props.imageProps}
					alt="Barrett Penrod - Headshot"
				/>
			</div>
			<Image
				loading="lazy"
				placeholder="blur"
				{...props.imageProps}
				alt="Barrett Penrod - Headshot"
			/>
			<div className="absolute top-0 z-20 flex h-full w-full items-end justify-center bg-slate-800 opacity-0 transition-all duration-300 ease-in-out hover:opacity-80">
				<button
					data-cy="headshot-modal-button"
					onClick={(e) => setIsOpen(true)}
					className="mb-5 bg-secondary py-2 px-4"
				>
					Open
				</button>
			</div>
		</div>
	);
};

export default Headshot;
