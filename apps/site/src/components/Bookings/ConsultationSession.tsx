import Link from "next/link";

// TODO: Migrate Content to CMS

const ConsultationSession = () => {
	return (
		<div className=" bg-secondary flex h-full max-w-md flex-col gap-3 rounded-lg p-8 md:max-w-lg lg:max-w-xl  2xl:justify-between ">
			{/* Info Section */}
			<h2 className="text-primary text-center md:text-3xl lg:text-4xl">
				Book a 20 min <br /> FREE consultation
			</h2>
			<p className="text-primary text-justify ">
				A FREE 20 minute zoom meeting where you will meet me, discuss your
				goals, wants, and needs for your voice journey, and learn more about me,
				my methodology and teaching style. At the end of the consultation we
				will either book you for your first session, or you will leave with a
				list contact info for several of my colleagues who may be a closer
				match! Book your free consultation here today!
			</p>
			<button className="bg-primary mx-auto">
				<Link href="/bookings/consultation" className="text-secondary">
					Book Now
				</Link>
			</button>
		</div>
	);
};

export default ConsultationSession;
