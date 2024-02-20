"use server";

import { prisma } from "@bpvs/db";
import { GCal, getGCalAppCredentials } from "@/utils/gCal/credentials";

export const onCalendarToggle = async (
	data: { id: string; name: string }[]
) => {
	const storedCals = await prisma.connectedCalendar.findMany();
	const storedCalIds = storedCals.map((cal) => cal.externalCalId);
	const newCalIds = data.map((cal) => cal.id);
	const calIdsToRemove = storedCalIds.filter((id) => !newCalIds.includes(id));
	const calIdsToAdd = newCalIds.filter((id) => !storedCalIds.includes(id));
	console.info("calIdsToRemove", calIdsToRemove);

	await prisma.connectedCalendar.deleteMany({
		where: {
			externalCalId: {
				in: calIdsToRemove,
			},
		},
	});

	const newCals = data.filter((cal) => calIdsToAdd.includes(cal.id));
	console.info("newCals", newCals);
	const newCalData = newCals.map((cal) => ({
		externalCalId: cal.id,
		name: cal.name,
	}));
	console.info("newCalData", newCalData);
	await prisma.connectedCalendar.createMany({
		data: newCalData,
		skipDuplicates: true,
	});
};

export const getConnectedCalendars = async () => {
	const cals = await prisma.connectedCalendar.findMany();
	return cals;
};

export const getGCalList = async () => {
	const gCalCredentials = await getGCalAppCredentials();

	if (!gCalCredentials) return;
	const gCal = new GCal(gCalCredentials);
	return gCal.getCalendarList();
};
