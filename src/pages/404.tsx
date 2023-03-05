import Link from "next/link";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "../types/types";

// pages/404.jsx
const Custom404: NextPageWithLayout = () => {
	return (
		<section className="my-auto flex flex-col items-center justify-center">
			<h1 className="p-6 text-center text-secondary">Page Not Found</h1>
			<Link href={"/"} passHref>
				<button className="max-w-fit self-center text-2xl">
					Go Home
				</button>
			</Link>
		</section>
	);
};

export default Custom404;

Custom404.getLayout = (page) => <Layout>{page}</Layout>;
