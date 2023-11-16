import { prisma } from "@bpvs/db";
import { QrScansTable } from "@/components";

const page = async () => {
	const data = await prisma.qrScan.findMany();
	const locations = await prisma.qrScanLocation.findMany();
	const designs = await prisma.qrScanDesign.findMany();
	const campaigns = await prisma.qrScanCampaign.findMany();
	const flyerSizes = await prisma.qrScanFlyerSize.findMany();

	const tableData = {
		scanData: data,
		locations,
		designs,
		campaigns,
		flyerSizes,
	};

	return (
		<>
			<h1>Analytics</h1>
			<div>
				<QrScansTable {...tableData} />
			</div>
		</>
	);
};

export default page;
