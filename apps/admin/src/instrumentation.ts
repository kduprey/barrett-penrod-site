// export const register = async () => {
// 	if (process.env.NEXT_RUNTIME === "nodejs") {
// 		const { prisma } = await import("@bpvs/db");

// 		const locations = await prisma.serviceLocations.findMany();
// 		const availabilities = await prisma.availabilitySchedule.findMany();

// 		if (availabilities.length === 0) {
// 			const availibility = await prisma.availabilitySchedule.create({
// 				data: {
// 					name: "Default Availability",
// 					isDefault: true,
// 					daysOfWeek: ["1", "2", "3", "4", "5"],
// 					// 9:00 AM
// 					startTime: new Date(2021, 1, 1, 9, 0, 0),
// 					// 5:00 PM
// 					endTime: new Date(2021, 1, 1, 17, 0, 0),
// 				},
// 			});
// 			availabilities.push(availibility);
// 		}

// 		if (locations.length === 0) {
// 			const location = await prisma.serviceLocations.create({
// 				data: {
// 					type: "ZOOM",
// 				},
// 			});
// 			locations.push(location);
// 		}
// 	}
// };
