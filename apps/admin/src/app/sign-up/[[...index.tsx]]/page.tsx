import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useMantineColorScheme } from "@mantine/core";

const Page = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<SignUp
			appearance={{
				baseTheme: colorScheme === "dark" ? dark : undefined,
			}}
		/>
	);
};

export default Page;
