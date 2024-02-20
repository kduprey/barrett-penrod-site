"use client";
import type { AvailabilitySchedule, ServiceLocations } from "@bpvs/db";
import {
	Button,
	Center,
	Container,
	NativeSelect,
	NumberInput,
	Stack,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const serviceSchema = z.object({
	name: z.string(),
	description: z.string(),
	duration: z.number(),
	bufferTimeBefore: z.number(),
	bufferTimeAfter: z.number(),
	minimumNotice: z.number(),
	price: z.number(),
	location: z.array(z.string()),
	availability: z.array(z.string()),
});

interface NewServiceFormProps {
	availabilities: AvailabilitySchedule[];
	locations: ServiceLocations[];
}

export const NewServiceForm = (props: NewServiceFormProps) => {
	const form = useForm({
		initialValues: {
			name: "",
			description: "",
			duration: 0,
			bufferTimeBefore: 0,
			bufferTimeAfter: 0,
			minimumNotice: 0,
			price: 0,
			location: [],
			availability: [],
		},
		validate: zodResolver(serviceSchema),
	});

	const locationOptions = props.locations.map((location) => ({
		label:
			location.type === "ZOOM" ? "Zoom" : `In Person - ${location.location}`,
		value: location.id.toString(),
	}));

	const availabilityOptions = props.availabilities.map((availability) => ({
		label: availability.name,
		value: availability.id.toString(),
	}));

	return (
		<Container>
			<form
				onSubmit={form.onSubmit((values) => {
					console.info(values);
				})}
			>
				<Stack gap="sm">
					<TextInput
						label="Name"
						placeholder="Consultation Session"
						required
						{...form.getInputProps("name")}
					/>
					<TextInput
						label="Description"
						placeholder="A 30 minute consultation session"
						required
						{...form.getInputProps("description")}
					/>
					<NumberInput
						allowNegative={false}
						description="Duration of the service in minutes"
						label="Duration"
						placeholder="30"
						required
						{...form.getInputProps("duration")}
					/>
					<NumberInput
						allowNegative={false}
						description="Buffer time before the service in minutes"
						label="Buffer Time Before"
						placeholder="5"
						required
						{...form.getInputProps("bufferTimeBefore")}
					/>

					<NumberInput
						allowNegative={false}
						description="Buffer time after the service in minutes"
						label="Buffer Time After"
						placeholder="5"
						required
						{...form.getInputProps("bufferTimeAfter")}
					/>

					<NumberInput
						allowNegative={false}
						description="Minimum amount of notice required to book the service"
						label="Minimum Notice"
						placeholder="0"
						required
						{...form.getInputProps("minimumNotice")}
					/>

					<NumberInput
						allowNegative={false}
						decimalScale={2}
						label="Price"
						placeholder="0"
						prefix="$"
						required
						{...form.getInputProps("price")}
					/>

					<NativeSelect
						data={locationOptions}
						label="Location"
						{...form.getInputProps("location")}
					/>

					<NativeSelect
						data={availabilityOptions}
						label="Availability"
						{...form.getInputProps("availability")}
					/>
				</Stack>
				<Center>
					<Button my="md" type="submit">
						Submit
					</Button>
				</Center>
			</form>
		</Container>
	);
};
