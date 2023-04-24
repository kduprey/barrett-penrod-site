import Footer from "./Footer";
import Header from "./Header";
import PageBar from "./PageBar";
import SocialBar from "./SocialBar";

type Props = {
	title?: string;
	description?: string;
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<main className={`bg-primary flex min-h-screen flex-col`}>
			<Header
				title={
					props.title ||
					"Barrett Penrod · Actor, Singer, Voice Instructor, and Director"
				}
				description={
					props.description ||
					"Barrett Penrod is an actor, singer working professionally in the NYC area; voice instructor and singing voice specialist available for immediate booking."
				}
			/>

			<PageBar />

			<SocialBar />
			{props.children}
			<Footer />
		</main>
	);
};

export default Layout;
