import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [age, setAge] = useState("");

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			name,
			email,
			message,
			age,
		};

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.id) {
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
			});
	};

	return (
		<div
			id="contact"
			className="flex flex-col flex-wrap items-center justify-center space-y-4 bg-primary py-6 md:flex md:flex-row"
		>
			<h1 className="w-full text-center text-secondary">Contact</h1>

			<div className="w-full ">
				<form
					className={` flex flex-col items-center justify-center transition-all duration-300 ease-in-out  ${
						loading ? "opacity-50" : ""
					} ${success ? "h-0 opacity-0" : "h-auto opacity-100"}`}
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:space-x-4">
						<div className="flex flex-col items-center justify-center space-y-3">
							<div className="flex items-center space-x-3">
								<label
									htmlFor="name"
									className="text-secondary"
								>
									Name
								</label>
								<input
									type="text"
									className="p-2"
									name="Name"
									id="name"
									value={name}
									onChange={handleChange}
								/>
							</div>
							<div className="flex items-center space-x-3">
								<label
									htmlFor="email"
									className="text-secondary"
								>
									Email
								</label>
								<input
									type="email"
									className="p-2"
									name="Email"
									id="email"
									value={email}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="flex items-center justify-center space-x-3 pt-3 md:flex-col md:space-y-3">
							<label htmlFor="message" className="text-secondary">
								Message
							</label>
							<textarea
								id="message"
								className="p-2"
								name="Message"
								rows={5}
								value={message}
								onChange={handleChange}
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
						disabled={loading}
						className="mt-3 bg-secondary px-4 py-2"
					>
						Submit
					</button>
				</form>
				<div>
					{success ? (
						<div className="text-center text-secondary">
							<FontAwesomeIcon icon={faCheck} size="3x" />
							<h4 className="text-secondary">
								Your message has been sent!
							</h4>
						</div>
					) : (
						""
					)}
				</div>
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
