import { prisma } from "@bpvs/db";
import { Card, Title } from "@mantine/core";

export const TodaysBookingsWidget = async () => {
	const bookings = await prisma.serviceBooking.findMany({
		where: {
			startTime: {
				gte: new Date(Date.now()),
				lte: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours from now
			},
		},
	});

	return (
		<Card>
			<Title order={2}>Today&apos;s Bookings</Title>

			{bookings.map((booking) => (
				<div key={booking.id}>
					{booking.id} - {booking.status} - {booking.startTime.toString()}
				</div>
			))}
		</Card>
	);
};
