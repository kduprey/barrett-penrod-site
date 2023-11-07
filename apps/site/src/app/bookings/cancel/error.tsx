"use client";

const Error = () => {
	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6 pt-20">
			<h2 className="text-center text-secondary">Booking Cancelled</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 ">
				<p className="text-center text-primary">
					Downpayment is required to confirm booking. Booking will be cancelled
					within the hour pending no downpayment is received.
				</p>
			</div>
		</section>
	);
};

export default Error;
