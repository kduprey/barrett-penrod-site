import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = () => {
	return (
		<>
			<div className="bg-secondary mx-6 flex items-center justify-evenly p-2 text-black md:hidden">
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
				<a
					className="text-black"
					href="https://www.youtube.com/channel/UCgGtle_abxJQUnCFLYg5Gyg"
				>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
			<div className="bg-secondary fixed right-0 top-1/2 z-20 hidden h-40 w-12 flex-col justify-evenly md:flex">
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
				<a
					className="pl-4 text-black"
					href="https://www.youtube.com/channel/UCgGtle_abxJQUnCFLYg5Gyg"
				>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
		</>
	);
};

export default SocialBar;
