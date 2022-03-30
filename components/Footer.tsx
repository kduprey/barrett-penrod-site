import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	facebook: IconDefinition;
	twitter: IconDefinition;
	instagram: IconDefinition;
	youtube: IconDefinition;
};

const Footer = ({ facebook, twitter, instagram, youtube }: Props) => {
	return (
		<div className="bg-primary flex flex-col justify-center items-center space-y-4 py-6">
			<h1 className="text-secondary">Contact</h1>

			<h2 className="text-white font-normal text-xl underline underline-offset-2">
				Representation
			</h2>

			<div className="flex flex-col justify-center items-center space-y-4 text-white">
				<h3>Manager</h3>
				<p>Bruce Robertson</p>
				<p>Email - info@site.com</p>
				<p>Tel - (123)456-7890</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 text-white">
				<h3>Commercial Agent</h3>
				<p>Magnum - Steve Macfee</p>
				<p>Email - info@site.com</p>
				<p>Tel - (123)456-7890</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 text-white">
				<h3>SF Agent</h3>
				<p>Pinnacle - Nathan Kelly</p>
				<p>Email - info@site.com</p>
				<p>Tel - (123)456-7890</p>
			</div>
			{/* Social Media Links */}
			<div className="flex justify-evenly items-center text-white w-4/5 pt-4">
				<FontAwesomeIcon icon={facebook} />
				<FontAwesomeIcon icon={twitter} />
				<FontAwesomeIcon icon={instagram} />
				<FontAwesomeIcon icon={youtube} />
			</div>
		</div>
	);
};

export default Footer;
