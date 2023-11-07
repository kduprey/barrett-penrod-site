"use client";

const Error = () => {
	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6 pt-20">
			<h2 className="text-center text-secondary">Consultation Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 ">
				<p className="text-2xl text-primary">Thank you!</p>

				<p className="text-center text-primary">
					Please check your email for confirmation.
				</p>
			</div>
		</section>
	);
};

export default Error;
