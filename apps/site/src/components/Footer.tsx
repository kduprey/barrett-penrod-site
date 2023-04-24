import {
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

const contactResponseSchema = z.object({
	id: z.string(),
	email: z.string(),
	name: z.string(),
	message: z.string(),
	timestamp: z.string(),
});

type contactResponse = z.infer<typeof contactResponseSchema>;

const Footer = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [age, setAge] = useState("");

	const [loading, setLoading] = useState(false as boolean);
	const [success, setSuccess] = useState(false as boolean);
	const [error, setError] = useState(false as boolean);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		console.log(name, value);

		switch (name) {
			case "Name":
				setName(value);
				break;
			case "Email":
				setEmail(value);
				break;
			case "Message":
				setMessage(value);
				break;
			case "Age":
				setAge(value);
				break;

			default:
				break;
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const messageData = {
			name,
			email,
			message,
		};
		try {
			const contactResponseData = await contactResponseSchema.parseAsync(
				(
					await axios.post("/api/contact", messageData)
				).data
			);

			if (contactResponseData) {
				setName("");
				setEmail("");
				setMessage("");
				setAge("");
				setLoading(false);
				setSuccess(true);
			} else {
				setError(true);
				setLoading(false);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(error);
				setError(true);
				setLoading(false);
			} else {
				console.error(error);
				setError(true);
				setLoading(false);
			}
		}
	};

	return (
		<div
			id="contact"
			data-cy="contact"
			className="bg-primary mt-auto flex flex-col flex-wrap items-center justify-center space-y-4 py-6 "
		>
			<h3 className="text-secondary w-full text-center">Contact</h3>

			<div className="w-full ">
				<form
					data-cy="contact-form"
					className={` flex flex-col items-center justify-center transition-all duration-300 ease-in-out  ${
						loading ? "opacity-50" : ""
					} ${success ? "h-0 opacity-0" : "h-auto opacity-100"}`}
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:space-x-12">
						<div className="flex flex-col items-center justify-center space-y-3">
							<div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
								<label htmlFor="name" className="text-secondary">
									Name
								</label>
								<input
									type="text"
									className="p-2"
									name="Name"
									id="name"
									value={name}
									onChange={handleChange}
									data-cy="contact-form-name"
									required
								/>
							</div>
							<div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
								<label htmlFor="email" className="text-secondary">
									Email
								</label>
								<input
									type="email"
									className="p-2"
									name="Email"
									id="email"
									value={email}
									onChange={handleChange}
									data-cy="contact-form-email"
									required
								/>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center space-y-3 pt-3 md:space-x-0 md:pt-0">
							<label htmlFor="message" className="text-secondary">
								Message
							</label>
							<textarea
								id="message"
								className=" p-2"
								name="Message"
								rows={5}
								value={message}
								onChange={handleChange}
								data-cy="contact-form-message"
								required
							/>
						</div>
					</div>

					<input
						type="text"
						value={age}
						onChange={handleChange}
						name="Age"
						id="age"
						className="hidden"
					/>

					<button
						type="submit"
						className="bg-secondary mt-3 disabled:opacity-20"
						disabled={
							loading ||
							name === "" ||
							email === "" ||
							message === "" ||
							email.match(/@/) === null
						}
						data-cy="contact-form-submit"
					>
						Submit
					</button>
				</form>
				<div>
					{success ? (
						<div
							className="text-secondary text-center"
							data-cy="success-message"
						>
							<FontAwesomeIcon icon={faCheck} size="3x" />
							<h4 className="text-secondary">Your message has been sent!</h4>
						</div>
					) : error ? (
						<div className="text-secondary text-center" data-cy="error-message">
							<FontAwesomeIcon icon={faTimes} size="3x" />
							<h4 className="text-secondary">
								There was an error sending your message.
							</h4>
						</div>
					) : (
						""
					)}
				</div>
			</div>

			{/* Social Media Links */}
			<div className="flex w-4/5 items-center justify-evenly pt-4 text-white md:w-1/4">
				<a href="https://twitter.com/penrodbarrett" className="text-secondary">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href="https://instagram.com/barrettpenrod"
					className="text-secondary"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://www.youtube.com/channel/UCgGtle_abxJQUnCFLYg5Gyg"
					className="text-secondary"
				>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
