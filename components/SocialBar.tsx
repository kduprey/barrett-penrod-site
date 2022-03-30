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
		<div className="flex justify-evenly items-center bg-secondary p-2 text-black mx-6">
			<FontAwesomeIcon icon={facebook} />
			<FontAwesomeIcon icon={twitter} />
			<FontAwesomeIcon icon={instagram} />
			<FontAwesomeIcon icon={youtube} />
		</div>
	);
};

export default SocialBar;
