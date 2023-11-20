"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Center, useComputedColorScheme } from "@mantine/core";

const Page = () => {
	const colorScheme = useComputedColorScheme("light");

	return (
		<Center h={"100%"} bg={"black"}>
			<SignIn
				appearance={{
					baseTheme: colorScheme === "dark" ? dark : undefined,
				}}
			/>
		</Center>
	);
};

export default Page;
