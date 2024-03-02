import { Title, Text, Group, Stack } from "@mantine/core";
import { HeroCarousel } from "@/components";

const Page = () => {
	return (
		<>
			{/* <PageBar /> */}

			{/* <SocialBar /> */}
			<section id="home">
				{/* Hero Section */}
				<Group justify="space-around">
					<HeroCarousel />
					<Stack
						style={{
							alignSelf: "start",
						}}
					>
						<Text>Hey, I&apos;m</Text>
						<Title>Barrett Penrod</Title>
						<Text>Actor, Singer, Mover</Text>
					</Stack>
				</Group>

				{/* About Section */}

				{/* <About /> */}

				{/* Resume/Headshots */}

				{/* <Headshots />

			<div className="flex justify-center p-3">
				<hr className="h-1 w-3/4" />
			</div> */}

				{/* Resume */}
				{/* <div className="py-6 md:p-0" id="resume">
				<h1 className="text-center text-secondary">Resumé</h1>

				<ResumeTable />

				<div className="flex justify-center pb-6">
					<a
						className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
						data-cy="download-resume"
						href="https://files.kduprey.com/barrettpenrod/Barrett_Penrod_Resume.pdf"
					>
						Download Resume
					</a>
				</div>
			</div> */}

				{/* Showreel */}

				{/* <Showreel /> */}

				{/* Photos */}

				{/* <Photos /> */}

				{/* News */}

				{/* <News /> */}
			</section>
			{/* <Footer /> */}
		</>
	);
};

export default Page;
