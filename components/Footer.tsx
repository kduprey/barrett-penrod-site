import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div
			id="contact"
			className="flex flex-col flex-wrap items-center justify-center space-y-4 bg-primary py-6 md:flex md:flex-row"
		>
			<h1 className="w-full text-center text-secondary">Contact</h1>

			<div className="w-full ">
				<form className="flex flex-col items-center justify-center space-y-3">
					<div className="flex space-x-3">
						<label htmlFor="name" className="text-secondary">
							Name
						</label>
						<input type="text" id="name" />
					</div>
					<div className="flex space-x-3">
						<label htmlFor="email" className="text-secondary">
							Email
						</label>
						<input type="email" id="email" />
					</div>
					<div className="flex flex-col items-center justify-center space-y-3">
						<label htmlFor="message" className="text-secondary">
							Message
						</label>
						<textarea id="message" rows={5} />
					</div>
					<button className=" bg-secondary px-4 py-2">Submit</button>
				</form>
			</div>

			{/* Social Media Links */}
			<div className="flex w-4/5 items-center justify-evenly pt-4 text-white md:w-1/4">
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
		</div>
	);
};

export default Footer;
