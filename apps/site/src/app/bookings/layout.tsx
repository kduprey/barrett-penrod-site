import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { BookingNavbar, CookieBanner, Logo, SocialBar } from "@/components";

export const metadata: Metadata = {
	description:
		"Book in for voice, audition, acting lessons or singing voice specialist sessions.",
	title: "Barrett Penrod Voice Studio",
};

const layout = ({ children }: PropsWithChildren) => {
	return (
		<main className="flex h-full min-h-screen flex-col bg-primary">
			<BookingNavbar />
			<SocialBar />
			<div className="p-4">{children}</div>
			<CookieBanner />
			<footer className="mt-auto w-full max-w-[18em] self-center py-5">
				<Logo />
			</footer>
		</main>
	);
};
export default layout;
