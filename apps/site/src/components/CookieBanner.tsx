import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef } from "react";

// TODO: Migrate banner text to CMS

const CookieBanner = () => {
	const banner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (localStorage.getItem("cookieSeen") !== "true") {
			setTimeout(() => {
				if (banner.current) banner.current.classList.add("bottom-10");
				setTimeout(() => {
					if (banner.current) banner.current.classList.remove("-bottom-20");
				}, 500);
				localStorage.setItem("cookieSeen", "true");
			}, 1000);
		}
	}, []);

	const handleClose = () => {
		if (banner.current) banner.current.classList.add("-bottom-20");
		setTimeout(() => {
			if (banner.current) banner.current.classList.add("hidden");
		}, 2000);
	};

	return (
		<div
			ref={banner}
			className="withTransition border-secondary bg-primary fixed -bottom-20 left-[10%] right-[10%] z-50 flex w-4/5 items-center justify-between rounded border p-3 shadow-md shadow-black"
		>
			<p className="text-gray-200">
				By using our website, you agree to our{" "}
				<Link href={"/cookie-policy"} passHref>
					<span className="withTransition text-secondary cursor-pointer underline underline-offset-2 opacity-75 hover:opacity-100">
						cookie policy
					</span>
				</Link>
				.
			</p>
			<button onClick={handleClose} className="mt-0">
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	);
};

export default CookieBanner;
