import { prisma } from "@bpvs/db";
import { Container, Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import { ContactSubmissionsTable, QrScansTable } from "@/components";

const page = async () => {
	const scanData = await prisma.qrScan.findMany();
	const locations = await prisma.qrScanLocation.findMany();
	const designs = await prisma.qrScanDesign.findMany();
	const campaigns = await prisma.qrScanCampaign.findMany();
	const flyerSizes = await prisma.qrScanFlyerSize.findMany();
	const contactSubmissions = await prisma.contactSubmission.findMany();

	return (
		<>
			<h1>Analytics</h1>
			<div>
				<Tabs defaultValue="qrScans">
					<TabsList>
						<TabsTab value="qrScans">QR Code Scans</TabsTab>
						<TabsTab value="contactSubmissions">Contact Submissions</TabsTab>
					</TabsList>

					<TabsPanel value="qrScans">
						<Container fluid>
							<h2>QR Code Scans</h2>
							<QrScansTable
								{...{ scanData, locations, designs, campaigns, flyerSizes }}
							/>
						</Container>
					</TabsPanel>

					<TabsPanel value="contactSubmissions">
						<Container fluid>
							<h2>Contact Submissions</h2>
							<ContactSubmissionsTable
								{...{ submissionData: contactSubmissions }}
							/>
						</Container>
					</TabsPanel>
				</Tabs>
			</div>
		</>
	);
};

export default page;
