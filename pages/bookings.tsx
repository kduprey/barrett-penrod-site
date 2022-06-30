import { NextPageWithLayout } from "../types";
import Layout from "./layout";

type Props = {};

const Bookings: NextPageWithLayout = (props: Props) => {
	return (
		<section className="p-4">
			<h1 className="text-center text-secondary">Voice Studio</h1>

			<div className="flex flex-col space-y-3 p-4">
				<h3>Voice Lessons</h3>
				<div className="flex space-x-3">
					<div className="space-y-2 rounded-lg bg-secondary p-6 shadow-md hover:opacity-80">
						<h4 className="text-center text-primary">
							Service Title
						</h4>
						<hr className="border-primary opacity-20" />
						<p className="text-center text-primary opacity-70">
							Location
						</p>
						<p className="text-primary opacity-80">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quaerat omnis quidem voluptas molestias
							dignissimos consectetur voluptatum eum! Veritatis
							ipsam mollitia molestias aperiam? Libero ut minus
							dolore maxime atque consectetur sed!
						</p>
						<hr className="border-primary opacity-20" />
						<button>Book Now!</button>
					</div>
					<button>Book in at your own location in NYC metro</button>
					<button>Book in for in person at Open Jar - NYC</button>
					<button>Book in for Virtual</button>
				</div>
				<h3>Voice Coaching</h3>
				<h3>Acting Lessons</h3>
				<h3>Audition Coaching</h3>
				<h3>SVS Sessions</h3>
			</div>
		</section>
	);
};

export default Bookings;

Bookings.getLayout = (page) => (
	<Layout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</Layout>
);
