import type { ReactNode } from "react";
import { CookieBanner } from "./CookieBanner";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { BookingNavbar } from "./Navbar/BookingNavbar";
import { SocialBar } from "./SocialBar";

interface BookingsLayoutProps {
	children: ReactNode;
	title?: string;
	description?: string;
}

export const BookingsLayout = (props: BookingsLayoutProps): JSX.Element => (
	<main className="flex h-full min-h-screen flex-col bg-primary">
		<Header
			description={
				props.description ||
				"Barrett Penrod is an actor, singer working professionally in the NYC area; voice instructor and singing voice specialist available for immediate booking."
			}
			title={
				props.title ||
				"Barrett Penrod · Actor, Singer, Voice Instructor, and Director"
			}
		/>
		<BookingNavbar />

		<SocialBar />
		<div className="p-4">{props.children}</div>
		<CookieBanner />
		<footer className="mt-auto w-full max-w-[18em] self-center py-5">
			<Logo />
		</footer>
	</main>
);
