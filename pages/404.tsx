import Layout from "../components/Layout";
import { NextPageWithLayout } from "../types/types";

// pages/404.jsx
const Custom404: NextPageWithLayout = () => {
	return (
		<>
			<h1 className="p-6 text-center text-secondary">
				404 - Page Not Found
			</h1>
		</>
	);
};

export default Custom404;

Custom404.getLayout = (page) => <Layout>{page}</Layout>;
