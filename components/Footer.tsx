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
		<div className="flex flex-col flex-wrap items-center justify-center space-y-4 bg-primary py-6 md:flex md:flex-row">
			<h1 className="w-full text-center text-secondary">Contact</h1>

			<div className="w-full">
				<h2 className="text-center text-xl font-normal text-white underline underline-offset-2">
					Representation
				</h2>

				<div className="flex flex-col justify-evenly space-y-4 pt-6 md:flex-row">
					<div className="flex flex-col items-center justify-center space-y-4 text-white">
						<h3>Manager</h3>
						<p>Bruce Robertson</p>
						<p>Email - info@site.com</p>
						<p>Tel - (123)456-7890</p>
					</div>
					<div className="flex flex-col items-center justify-center space-y-4 text-white">
						<h3>Commercial Agent</h3>
						<p>Magnum - Steve Macfee</p>
						<p>Email - info@site.com</p>
						<p>Tel - (123)456-7890</p>
					</div>
					<div className="flex flex-col items-center justify-center space-y-4 text-white">
						<h3>SF Agent</h3>
						<p>Pinnacle - Nathan Kelly</p>
						<p>Email - info@site.com</p>
						<p>Tel - (123)456-7890</p>
					</div>
				</div>
			</div>

			{/* Social Media Links */}
			<div className="flex w-4/5 items-center justify-evenly pt-4 text-white md:w-1/4">
				<FontAwesomeIcon icon={facebook} />
				<FontAwesomeIcon icon={twitter} />
				<FontAwesomeIcon icon={instagram} />
				<FontAwesomeIcon icon={youtube} />
			</div>
		</div>
	);
};

export default Footer;
