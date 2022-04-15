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
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
			<div className="fixed top-1/2 right-0 z-20 hidden h-40 w-12 flex-col justify-evenly bg-secondary md:flex">
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
		</>
	);
};

export default SocialBar;
