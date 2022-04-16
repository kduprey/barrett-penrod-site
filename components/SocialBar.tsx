import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

const SocialBar = (props: Props) => {
	return (
		<>
			<div className="mx-6 flex items-center justify-evenly bg-secondary p-2 text-black md:hidden">
				<a
					className="text-black"
					href="https://twitter.com/penrodbarrett?s=21&t=cXVPSIuXbwvd6pTGNYZz2A"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					className="text-black"
					href="https://instagram.com/barrettpenrod?igshid=YmMyMTA2M2Y="
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
			<div className="fixed top-1/2 right-0 z-20 hidden h-40 w-12 flex-col justify-evenly bg-secondary md:flex">
				<a
					className="pl-4 text-black"
					href="https://twitter.com/penrodbarrett?s=21&t=cXVPSIuXbwvd6pTGNYZz2A"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					className="pl-4 text-black"
					href="https://instagram.com/barrettpenrod?igshid=YmMyMTA2M2Y="
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</>
	);
};

export default SocialBar;
