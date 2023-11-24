"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Center, useMantineColorScheme } from "@mantine/core";

const Page = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<Center h={"100%"} bg={"black"}>
			<SignUp
				appearance={{
					baseTheme: colorScheme === "dark" ? dark : undefined,
				}}
			/>
		</Center>
	);
};

export default Page;
