import type {
	QrScan,
	QrScanCampaign,
	QrScanDesign,
	QrScanFlyerSize,
	QrScanLocation,
} from "@bpvs/db";

export const parseScanData = (
	scanData: QrScan[],
	locations: QrScanLocation[],
	designs: QrScanDesign[],
	campaigns: QrScanCampaign[],
	flyerSizes: QrScanFlyerSize[]
) =>
	scanData.map((scan) => {
		const location = locations.find((l) => l.id === scan.location);
		const design = designs.find((d) => d.id === scan.designId);
		const campaign = campaigns.find((c) => c.id === scan.campaign);
		const flyerSize = flyerSizes.find((fS) => fS.id === scan.flyerSize);

		return {
			location: location?.name,
			design: design?.name,
			campaign: campaign?.name,
			flyerSize: flyerSize?.name,
		};
	});
