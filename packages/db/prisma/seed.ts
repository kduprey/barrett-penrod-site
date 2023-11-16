import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { campaigns, designs, flyerSizes, locations } from "./scanData";

const prisma = new PrismaClient();

const createQrScans = async () => {
	const qrScans: {
		flyerSize: number;
		campaign: number;
		designId: number;
		location: number;
	}[] = [];

	const min = 1;

	for (let i = 0; i < 15; i++) {
		qrScans.push({
			flyerSize: faker.number.int({ min, max: flyerSizes.length }),
			campaign: faker.number.int({ min, max: campaigns.length }),
			designId: faker.number.int({ min, max: designs.length }),
			location: faker.number.int({ min, max: locations.length }),
		});
	}

	await prisma.qrScan.createMany({
		data: qrScans,
	});
};

const createContactSubmission = async () => {
	const contactSubmissions: { email: string; name: string; message: string }[] =
		[];

	for (let i = 0; i < 15; i++) {
		contactSubmissions.push({
			email: faker.internet.email(),
			name: faker.person.fullName(),
			message: faker.lorem.paragraph(),
		});
	}
	await prisma.contactSubmission.createMany({
		data: contactSubmissions,
	});
};

const createQrScanTypes = async () => {
	if (
		(await prisma.qrScanLocation.findMany()).filter(
			(location) => location.name === locations[0].name
		).length < 1
	)
		await prisma.qrScanLocation.createMany({
			data: locations,
		});

	if (
		(await prisma.qrScanDesign.findMany()).filter(
			(design) => design.name === designs[0].name
		).length < 1
	)
		await prisma.qrScanDesign.createMany({
			data: designs,
		});

	if (
		(await prisma.qrScanFlyerSize.findMany()).filter(
			(flyerSize) => flyerSize.name === flyerSizes[0].name
		).length < 1
	)
		await prisma.qrScanFlyerSize.createMany({
			data: flyerSizes,
		});

	if (
		(await prisma.qrScanCampaign.findMany()).filter(
			(campaign) => campaign.name === campaigns[0].name
		).length < 1
	)
		await prisma.qrScanCampaign.createMany({
			data: campaigns,
		});
};

const main = async () => {
	await prisma.contactSubmission.deleteMany({});
	await prisma.qrScan.deleteMany({});

	await createContactSubmission();
	await createQrScans();
	await createQrScanTypes();
};

main()
	.catch((e) => {
		throw e;
	})
	.finally(
		void (async () => {
			await prisma.$disconnect();
		})
	);
