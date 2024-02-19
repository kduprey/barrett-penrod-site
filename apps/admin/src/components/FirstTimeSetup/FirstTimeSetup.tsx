"use client";

import {
	Button,
	Modal,
	Stepper,
	StepperCompleted,
	StepperStep,
} from "@mantine/core";
import { useSessionStorage } from "@mantine/hooks";
import {
	IconBrandGoogle,
	IconBrandStripe,
	IconBrandZoom,
	IconClock,
} from "@tabler/icons-react";
import { useGCalList } from "../Widgets/GCalWidget/hooks";
import { ConnectGCalStep } from "./steps/ConnectGCalStep";
import { ConnectZoomStep } from "./steps/ConnectZoomStep";
import { ConnectStripeStep } from "./steps/ConnectStripeStep";
import { useStripeAccountInfo, useZoomInfo } from "./steps/hooks";
import { SetupWorkingHoursStep } from "./steps/SetupWorkingHoursStep";

export const FirstTimeSetup = () => {
	// const [opened, { open, close }] = useDisclosure(false);
	const [value, setValue] = useSessionStorage<number>({
		key: "step",
		defaultValue: 0,
	});

	const nextStep = () => {
		setValue((current) => (current < 3 ? current + 1 : current));
	};

	const gCalData = useGCalList();
	const stripeData = useStripeAccountInfo();
	const zoomData = useZoomInfo();

	return (
		<div>
			{/* <Modal onClose={close} opened title="Welcome to BPVS Admin!"> */}
			<Stepper active={value} allowNextStepsSelect>
				{/* <StepperStep
					description="Connect Google Calendar"
					icon={<IconBrandGoogle />}
					label="Connect Google Calendar"
					loading={gCalData.isLoading}
				>
					<ConnectGCalStep {...{ nextStep, gCalData }} />
				</StepperStep>
				<StepperStep
					description="Connect Zoom"
					icon={<IconBrandZoom />}
					label="Connect Zoom"
					loading={zoomData.isLoading}
				>
					<ConnectZoomStep {...{ nextStep, zoomData }} />
				</StepperStep>
				<StepperStep
					description="Connect Stripe"
					icon={<IconBrandStripe />}
					label="Connect Stripe"
					loading={stripeData.isLoading}
				>
					<ConnectStripeStep {...{ nextStep, stripeData }} />
				</StepperStep> */}
				<StepperStep
					allowStepClick
					allowStepSelect
					description="Setup working hours"
					icon={<IconClock />}
					label="Working Hours"
				>
					<SetupWorkingHoursStep {...{ nextStep }} />
				</StepperStep>
				<StepperCompleted>
					<h1>Completed</h1>
					<Button
						onClick={() => {
							setValue(0);
						}}
					>
						Restart
					</Button>
				</StepperCompleted>
			</Stepper>
			{/* </Modal> */}
		</div>
	);
};
