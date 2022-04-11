import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
	facebook: IconDefinition;
	twitter: IconDefinition;
	instagram: IconDefinition;
	youtube: IconDefinition;
};

const SocialBar = ({ facebook, twitter, instagram, youtube }: Props) => {
	return (
		<>
			<div className="mx-6 flex items-center justify-evenly bg-secondary p-2 text-black md:hidden">
				<FontAwesomeIcon icon={facebook} />
				<FontAwesomeIcon icon={twitter} />
				<FontAwesomeIcon icon={instagram} />
				<FontAwesomeIcon icon={youtube} />
			</div>
			<div className="fixed top-1/2 right-0 z-20 hidden h-40 w-12 flex-col justify-evenly bg-secondary md:flex">
				<FontAwesomeIcon icon={facebook} />
				<FontAwesomeIcon icon={twitter} />
				<FontAwesomeIcon icon={instagram} />
				<FontAwesomeIcon icon={youtube} />
			</div>
		</>
	);
};

export default SocialBar;
