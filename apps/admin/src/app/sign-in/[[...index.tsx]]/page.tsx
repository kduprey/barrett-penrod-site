import { SignIn } from "@clerk/nextjs";
import { useMantineColorScheme } from "@mantine/core";
import { dark } from "@clerk/themes";

const Page = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<SignIn
			appearance={{
				baseTheme: colorScheme === "dark" ? dark : undefined,
			}}
		/>
	);
};

export default Page;
