"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Center, useMantineColorScheme } from "@mantine/core";

const Page = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<Center bg="black" h="100%">
			<SignUp
				appearance={{
					baseTheme: colorScheme === "dark" ? dark : undefined,
				}}
			/>
		</Center>
	);
};

export default Page;
