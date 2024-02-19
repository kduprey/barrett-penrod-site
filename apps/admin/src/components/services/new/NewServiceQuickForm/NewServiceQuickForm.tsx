"use client";

import {
	Button,
	Modal,
	NumberInput,
	Paper,
	Stack,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { z } from "zod";

const NewServiceQuickFormSchema = z.object({
	name: z.string(),
	duration: z.number(),
	description: z.string().optional(),
	price: z.number(),
});

export const NewServiceQuickForm = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const form = useForm({
		initialValues: {
			name: "",
			description: "",
			duration: 0,
			price: 0,
		},
		validate: zodResolver(NewServiceQuickFormSchema),
	});

	const onSubmit = form.onSubmit((values) => {
		console.info(values);
	});

	return (
		<>
			<Modal onClose={close} opened={opened} title="Create a new service">
				<Paper p={0}>
					<form onSubmit={onSubmit}>
						<Stack>
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
								decimalScale={2}
								label="Price"
								placeholder="0"
								prefix="$"
								required
								{...form.getInputProps("price")}
							/>

							<Button type="submit">Submit</Button>
						</Stack>
					</form>
				</Paper>
			</Modal>

			<Button onClick={open}>New Service</Button>
		</>
	);
};
