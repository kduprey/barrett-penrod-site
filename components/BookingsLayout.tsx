import {
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import CookieBanner from "./CookieBanner";
import Header from "./Header";
import BookingNavbar from "./Navbar/BookingNavbar";
import SocialBar from "./SocialBar";

type Props = {
	children: ReactNode;
	title?: string;
	description?: string;
};

const BookingsLayout = (props: Props) => {
	return (
		<main className={`flex h-full min-h-screen flex-col bg-primary`}>
			<Header
				title={
					props.title ||
					"Barrett Penrod · Actor, Singer, Voice Instructor, and Director"
				}
				description={
					props.description ||
					"Barrett Penrod is an actor, singer working professionally in the NYC area; voice instructor and singing voice specialist available for immediate booking."
				}
			/>
			<BookingNavbar />

			<SocialBar />
			{props.children}
			<CookieBanner />
			{/* Social Media Links */}
			<div className="mt-auto flex w-4/5 items-center justify-evenly self-center bg-secondary p-3 md:w-1/4">
				<a
					href="https://twitter.com/penrodbarrett"
					className="text-primary"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href="https://instagram.com/barrettpenrod"
					className="text-primary"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://www.youtube.com/channel/UCgGtle_abxJQUnCFLYg5Gyg"
					className="text-primary"
				>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
		</main>
	);
};

export default BookingsLayout;
