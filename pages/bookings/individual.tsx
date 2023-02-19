import { useRouter } from "next/router";
import { useState } from "react";
import BookingsLayout from "../../components/BookingsLayout";
import { services } from "../../data/services";
import { NextPageWithLayout } from "../../types/types";
import VsLogo from "/public/vslogo.svg";

const Individual: NextPageWithLayout = () => {
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

	const handleBackStep = (
		e: React.MouseEvent<HTMLDivElement>,
		currentStep: number
	): void => {
		if (currentStep === 1) {
			setStep([1]);
		}
		if (currentStep === 2 && step.includes(2)) {
			setStep([1, 2]);
		}
	};

	// TODO: Remove margin on mobile view of logo

	return (
		<section className="flex flex-col items-center justify-center space-y-4 p-4 md:my-auto md:flex-row">
			<div className="logo w-5/6 p-6 md:w-1/4">
				<VsLogo />
				{/* <Logo /> */}
			</div>
			<div className="flex flex-col items-center justify-center space-y-4 md:space-y-10 md:pl-6">
				<h3 className=" text-center text-secondary">
					Book your individual session
				</h3>

				<div className="order-2 m-3 flex flex-col items-center rounded-lg bg-secondary py-6 px-4 md:order-1 ">
					<div className="flex w-full items-start justify-evenly space-x-3">
						{/* Step 1 */}
						<div
							id="step1"
							className={`${
								step.includes(1) ? "completed" : "step"
							}`}
							onClick={(e) => handleBackStep(e, 1)}
						>
							<hr />
							<p>Step 1</p>
							<p>Select Service</p>
							{step.includes(2) ? (
								<span className="text-primary-800 font-bold">
									{services[service].title}
								</span>
							) : null}
						</div>
						{/* Step 2 */}
						<div
							id="step2"
							className={`${
								step.includes(2) ? "completed" : "step"
							}`}
							onClick={(e) => handleBackStep(e, 2)}
						>
							<hr />
							<p>Step 2</p>
							<p>Select Location</p>
							{step.includes(3) ? (
								<span className="text-primary-800 font-bold">
									{services[service].locations[location]}
								</span>
							) : null}
						</div>
						{/* Step 3 */}
						<div
							className={step.includes(3) ? "completed" : "step"}
						>
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
							<label
								htmlFor="service"
								className="text-gray-700 md:text-2xl"
							>
								Choose your lesson type:
							</label>

							<select
								name="service"
								id="service"
								className="m-6 md:text-2xl"
								value={service}
								onChange={(e) => {
									setService(Number.parseInt(e.target.value));
								}}
							>
								{services.map((service, index) => {
									return (
										<option
											value={index}
											key={service.title}
										>
											{service.title}
										</option>
									);
								})}
							</select>
						</div>

						{/* Location Selection */}
						<div
							className={`withTransition mt-6 flex flex-col items-center justify-center md:mt-0 md:flex-row ${
								step.includes(2) && !step.includes(3)
									? " "
									: " hidden"
							}`}
						>
							<label
								htmlFor="location"
								className="text-center md:text-2xl"
							>
								Select Session Location:
							</label>

							<select
								name="location"
								id="location"
								className="m-6 md:text-2xl"
								value={location}
								onChange={(e) => {
									setLocation(
										Number.parseInt(e.target.value)
									);
								}}
							>
								{service != -1
									? services[service].locations.map(
											(result, index) => {
												return (
													<option
														value={index}
														key={result}
													>
														{result}
													</option>
												);
											}
									  )
									: null}
							</select>
						</div>

						{step.includes(3) && (
							<div className="m-2 flex flex-col items-center justify-center space-y-4 md:grow md:justify-evenly">
								<h4>Confirm Details:</h4>
								<p className="text-2xl text-primary">
									Service:{" "}
									<span className="font-medium">
										{services[service].title}
									</span>
								</p>
								<p className="text-center text-2xl text-primary">
									Location:{" "}
									<span className="font-medium">
										{services[service].locations[location]}
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
									router.push(
										`/bookings/bookNow?service=${service}&location=${location}`
									);
								}
							}}
						>
							Continue
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Individual;

Individual.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
