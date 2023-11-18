"use client";

import type { ContactSubmission } from "@bpvs/db";
import { DataTable } from "mantine-datatable";
import { showNotification } from "@mantine/notifications";
import { useMemo } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface ContactSubmissionsTableProps {
	submissionData: ContactSubmission[];
}

export const ContactSubmissionsTable = ({
	submissionData,
}: ContactSubmissionsTableProps) => {
	const [bodyRef] = useAutoAnimate<HTMLTableSectionElement>();

	const records = useMemo(() => {
		const data = submissionData;

		return data;
	}, [submissionData]);

	return (
		<DataTable
			bodyRef={bodyRef}
			columns={[
				{
					accessor: "name",
					// this column has a custom title
					title: "Name",
					// right-align column
				},
				{
					accessor: "email",
					title: "Email",
				},
				{
					accessor: "message",
					title: "Message",
				},
				{
					accessor: "timestamp",
					title: "Submitted At",
					render: (record) => record.timestamp.toLocaleString(),
				},
			]}
			height={700}
			highlightOnHover
			mah={150}
			onRowClick={({ record: { name, email, message, timestamp } }) =>
				showNotification({
					title: `Clicked on ${name}`,
					message: `You clicked on ${name}'s message. Here is their email: ${email}. Here is their message: ${message}. They submitted this at ${timestamp.toLocaleString()}.`,
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
