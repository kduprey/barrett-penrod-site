"use client";

import { bundleServices } from "@bpvs/config";
import { motion as m } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BundleModalProps {
	isOpen: boolean;
	selectedBundle: number | string;
}

export const BundleModal = ({
	isOpen,
	selectedBundle,
}: BundleModalProps): JSX.Element => {
	const router = useRouter();
	const [step, setStep] = useState<number[]>([1]);
	const [service, setService] = useState(0);
	const [location, setLocation] = useState(0);

	const handleContinue = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (step.includes(2)) {
			setStep(step.concat(3));
		} else if (step.includes(1)) {
			setStep(step.concat(2));
		}
	};

	const handleBackStep = (currentStep: number): void => {
		if (currentStep === 1) {
			setStep([1]);
		}
		if (currentStep === 2 && step.includes(2)) {
			setStep([1, 2]);
		}
	};

	return (
		<m.div
			animate={{ opacity: 1 }}
			className={`withTransition fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50 duration-500 ${
				isOpen ? "z-[70] opacity-100" : "-z-[40] opacity-0"
			}`}
			exit={{ opacity: 0 }}
			id="modal"
			onb
			transition={{ duration: 0.5 }}
		>
			<div
				className={` withTransition relative top-20 m-6 mx-auto flex max-w-[95%] grow flex-col items-center rounded-lg bg-secondary py-6 px-4 lg:max-w-screen-md ${
					isOpen ? "top-20" : "-top-full"
				}`}
			>
				<h3 className="pb-3 text-center text-primary">
					Confirm your First Lesson Details
				</h3>
				<div className="flex w-full items-start justify-evenly space-x-3">
					{/* Step 1 */}
					<button
						className={`${step.includes(1) ? "completed" : "step"}`}
						id="step1"
						onClick={() => {
							handleBackStep(1);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleBackStep(1);
							}
						}}
						type="button"
					>
						<hr />
						<p>Step 1</p>
						<p>Select Service</p>
						{step.includes(2) ? (
							<span className="text-primary-800 font-bold">
								{bundleServices[service]?.title}
							</span>
						) : null}
					</button>
					{/* Step 2 */}
					<button
						className={`${step.includes(2) ? "completed" : "step"}`}
						id="step2"
						onClick={() => {
							handleBackStep(2);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleBackStep(2);
							}
						}}
						type="button"
					>
						<hr />
						<p>Step 2</p>
						<p>Select Location</p>
						{step.includes(3) ? (
							<span className="text-primary-800 font-bold">
								{bundleServices[service]?.locations[location]}
							</span>
						) : null}
					</button>
					{/* Step 3 */}
					<div className={step.includes(3) ? "completed" : "step"}>
						<hr />
						<p>Step 3</p>
						<p>Confirm and Book</p>
					</div>
				</div>

				<form
					className="flex grow flex-col items-center justify-center"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					{/* Service Selection */}
					<div
						className={
							step.includes(2)
								? "hidden"
								: "mt-6 flex flex-col items-center justify-center md:mt-0 md:flex-row"
						}
					>
						<label className="text-gray-700 md:text-2xl" htmlFor="service">
							Choose your lesson type:
						</label>

						<select
							className="m-6 md:text-2xl"
							id="service"
							name="service"
							onChange={(e) => {
								setService(Number.parseInt(e.target.value));
							}}
							value={service}
						>
							{bundleServices.map((bundleService, index) => (
								<option key={bundleService.title} value={index}>
									{bundleService.title}
								</option>
							))}
						</select>
					</div>

					{/* Location Selection */}
					<div
						className={`withTransition mt-6 flex flex-col items-center justify-center md:mt-0 md:flex-row ${
							step.includes(2) && !step.includes(3) ? " " : " hidden"
						}`}
					>
						<label className="text-center md:text-2xl" htmlFor="location">
							Select Session Location:
						</label>

						<select
							className="m-6 md:text-2xl"
							id="location"
							name="location"
							onChange={(e) => {
								setLocation(Number.parseInt(e.target.value));
							}}
							value={location}
						>
							{service !== -1
								? bundleServices[service]?.locations.map((result, index) => (
										<option key={result} value={index}>
											{result}
										</option>
								  ))
								: null}
						</select>
					</div>

					{step.includes(3) && (
						<div className="m-2 flex flex-col items-center justify-center space-y-4 md:grow md:justify-evenly">
							<h4>Confirm Details:</h4>
							<p className="text-2xl text-primary">
								Service:{" "}
								<span className="font-medium">
									{bundleServices[service]?.title}
								</span>
							</p>
							<p className="text-center text-2xl text-primary">
								Location:{" "}
								<span className="font-medium">
									{bundleServices[service]?.locations[location]}
								</span>
							</p>
						</div>
					)}
					<button
						className="border border-black transition ease-in-out hover:opacity-70 md:text-xl"
						onClick={(e) => {
							e.preventDefault();

							if (!step.includes(3)) handleContinue(e);
							if (step.includes(3)) {
								isOpen ? setIsOpen(false) : setIsOpen(true);

								router.push(
									`/bookings/bookNow?service=${service}&location=${location}&bundle=${selectedBundle}`
								);
							}
						}}
						type="submit"
					>
						Continue
					</button>
				</form>
			</div>
		</m.div>
	);
};
