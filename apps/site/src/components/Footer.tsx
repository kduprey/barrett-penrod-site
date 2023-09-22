"use client";

import { trytm } from "@bdsqqq/try";
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

export const Footer = (): JSX.Element => {
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
	): void => {
		const { name: inputName, value } = e.target;
		console.info(name, value);

		switch (inputName) {
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

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		setLoading(true);
		const messageData = {
			name,
			email,
			message,
		};
		const [submissionRes, submissionErr] = await trytm(
			axios.post("/api/contact", messageData)
		);
		if (submissionErr) {
			console.error(submissionErr);
			setError(true);
			setLoading(false);
			return;
		}

		const contactResponseData = contactResponseSchema.safeParse(
			submissionRes.data
		);

		if (contactResponseData.success) {
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
	};

	return (
		<div
			className="mt-auto flex flex-col flex-wrap items-center justify-center space-y-4 bg-primary py-6 "
			data-cy="contact"
			id="contact"
		>
			<h3 className="w-full text-center text-secondary">Contact</h3>

			<div className="w-full ">
				<form
					className={` flex flex-col items-center justify-center transition-all duration-300 ease-in-out  ${
						loading ? "opacity-50" : ""
					} ${success ? "h-0 opacity-0" : "h-auto opacity-100"}`}
					data-cy="contact-form"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:space-x-12">
						<div className="flex flex-col items-center justify-center space-y-3">
							<div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
								<label className="text-secondary" htmlFor="name">
									Name
								</label>
								<input
									className="p-2"
									data-cy="contact-form-name"
									id="name"
									name="Name"
									onChange={handleChange}
									required
									type="text"
									value={name}
								/>
							</div>
							<div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
								<label className="text-secondary" htmlFor="email">
									Email
								</label>
								<input
									className="p-2"
									data-cy="contact-form-email"
									id="email"
									name="Email"
									onChange={handleChange}
									required
									type="email"
									value={email}
								/>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center space-y-3 pt-3 md:space-x-0 md:pt-0">
							<label className="text-secondary" htmlFor="message">
								Message
							</label>
							<textarea
								className=" p-2"
								data-cy="contact-form-message"
								id="message"
								name="Message"
								onChange={handleChange}
								required
								rows={5}
								value={message}
							/>
						</div>
					</div>

					<input
						className="hidden"
						id="age"
						name="Age"
						onChange={handleChange}
						type="text"
						value={age}
					/>

					<button
						className="mt-3 bg-secondary disabled:opacity-20"
						data-cy="contact-form-submit"
						disabled={
							loading ||
							name === "" ||
							email === "" ||
							message === "" ||
							/@/.exec(email) === null
						}
						type="submit"
					>
						Submit
					</button>
				</form>
				<div>
					{success ? (
						<div
							className="text-center text-secondary"
							data-cy="success-message"
						>
							<FontAwesomeIcon icon={faCheck} size="3x" />
							<h4 className="text-secondary">Your message has been sent!</h4>
						</div>
					) : null}
					{error ? (
						<div className="text-center text-secondary" data-cy="error-message">
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
				<a className="text-secondary" href="https://twitter.com/penrodbarrett">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					className="text-secondary"
					href="https://instagram.com/barrettpenrod"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					className="text-secondary"
					href="https://www.youtube.com/channel/UCgGtle_abxJQUnCFLYg5Gyg"
				>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
		</div>
	);
};
