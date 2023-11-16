"use client";

import type {
	QrScan,
	QrScanCampaign,
	QrScanDesign,
	QrScanFlyerSize,
	QrScanLocation,
} from "@bpvs/db";
import { DataTable } from "mantine-datatable";
import { showNotification } from "@mantine/notifications";
import { MultiSelect } from "@mantine/core";
import { useMemo, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseScanData } from "./parseScanData";

interface QrScansTableProps {
	scanData: QrScan[];
	locations: QrScanLocation[];
	designs: QrScanDesign[];
	campaigns: QrScanCampaign[];
	flyerSizes: QrScanFlyerSize[];
}

export const QrScansTable = ({
	scanData,
	locations,
	designs,
	campaigns,
	flyerSizes,
}: QrScansTableProps) => {
	const [bodyRef] = useAutoAnimate<HTMLTableSectionElement>();

	const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
	const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
	const [selectedDesigns, setSelectedDesigns] = useState<string[]>([]);
	const [selectedFlyerSizes, setSelectedFlyerSizes] = useState<string[]>([]);

	const records = useMemo(() => {
		let data = parseScanData(
			scanData,
			locations,
			designs,
			campaigns,
			flyerSizes
		);

		if (selectedCampaigns.length)
			data = data.filter((record) =>
				selectedCampaigns.includes(`${record.campaign}`)
			);
		if (selectedLocations.length)
			data = data.filter((record) =>
				selectedLocations.includes(`${record.location}`)
			);
		if (selectedDesigns.length)
			data = data.filter((record) =>
				selectedDesigns.includes(`${record.design}`)
			);
		if (selectedFlyerSizes.length)
			data = data.filter((record) =>
				selectedFlyerSizes.includes(`${record.flyerSize}`)
			);

		return data;
	}, [
		scanData,
		locations,
		designs,
		campaigns,
		flyerSizes,
		selectedCampaigns,
		selectedLocations,
		selectedDesigns,
		selectedFlyerSizes,
	]);

	return (
		<DataTable
			bodyRef={bodyRef}
			columns={[
				{
					filtering: selectedCampaigns.length > 0,
					filter: (
						<MultiSelect
							clearable
							data={campaigns.map((campaign) => ({
								value: campaign.name,
								label: campaign.name,
							}))}
							description="Show all campaigns or select some of them"
							label="Campaigns "
							leftSection={<IconSearch size={16} />}
							onChange={setSelectedCampaigns}
							placeholder="Search campaigns…"
							searchable
							value={selectedCampaigns}
						/>
					),
					accessor: "campaign",
					// this column has a custom title
					title: "Campaign",
					// right-align column
				},
				{
					accessor: "location",
					title: "Location",
					filtering: selectedLocations.length > 0,
					filter: (
						<MultiSelect
							clearable
							data={locations.map((location) => ({
								value: location.name,
								label: location.name,
							}))}
							description="Show all locations or select some of them"
							label="Locations "
							leftSection={<IconSearch size={16} />}
							onChange={setSelectedLocations}
							placeholder="Search locations…"
							searchable
							value={selectedLocations}
						/>
					),
				},
				{
					filtering: selectedDesigns.length > 0,
					filter: (
						<MultiSelect
							clearable
							data={designs.map((design) => ({
								value: design.name,
								label: design.name,
							}))}
							description="Show all designs or select some of them"
							label="Designs "
							leftSection={<IconSearch size={16} />}
							onChange={setSelectedDesigns}
							placeholder="Search designs…"
							searchable
							value={selectedDesigns}
						/>
					),
					accessor: "design",
					title: "Design",
				},
				{
					filtering: selectedFlyerSizes.length > 0,
					filter: (
						<MultiSelect
							clearable
							data={flyerSizes.map((flyerSize) => ({
								value: flyerSize.name,
								label: flyerSize.name,
							}))}
							description="Show all flyer sizes or select some of them"
							label="Flyer Sizes "
							leftSection={<IconSearch size={16} />}
							onChange={setSelectedFlyerSizes}
							placeholder="Search flyer sizes…"
							searchable
							value={selectedFlyerSizes}
						/>
					),
					accessor: "flyerSize",
					title: "Flyer Size",
				},
			]}
			highlightOnHover
			minHeight={150}
			onRowClick={({ record: { campaign, location, design, flyerSize } }) =>
				showNotification({
					title: `Clicked on ${campaign}`,
					message: `You clicked on ${campaign}, a ${design} design with a ${flyerSize} size at ${location}.`,
					withBorder: true,
				})
			}
			records={records}
			striped
			withColumnBorders
			withTableBorder
		/>
	);
};
