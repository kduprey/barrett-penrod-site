"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const CookieBanner = (): JSX.Element => {
	const banner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (localStorage.getItem("cookieSeen") !== "true") {
			setTimeout(() => {
				banner.current ? banner.current.classList.add("bottom-10") : null;
				setTimeout(() => {
					banner.current ? banner.current.classList.remove("-bottom-20") : null;
				}, 500);
				localStorage.setItem("cookieSeen", "true");
			}, 1000);
		}
	}, []);

	const handleClose = (): void => {
		banner.current ? banner.current.classList.add("-bottom-20") : null;
		setTimeout(() => {
			banner.current ? banner.current.classList.add("hidden") : null;
		}, 2000);
	};

	return (
		<div
			className="withTransition fixed left-[10%] -bottom-20 right-[10%] z-50 flex w-4/5 items-center justify-between rounded border border-secondary bg-primary p-3 shadow-md shadow-black"
			ref={banner}
		>
			<p className="text-gray-200">
				By using our website, you agree to our{" "}
				<Link href="/cookie-policy" passHref>
					<span className="withTransition cursor-pointer text-secondary underline underline-offset-2 opacity-75 hover:opacity-100">
						cookie policy
					</span>
				</Link>
				.
			</p>
			<button className="mt-0" onClick={handleClose} type="button">
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	);
};
