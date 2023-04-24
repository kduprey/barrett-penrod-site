import Link from "next/link";
import MenuButton from "../../components/MenuButton";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const TitleBar = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<div className="bg-primary sticky top-0 z-[60] flex items-center justify-between px-8 md:pt-6">
			<Link href={"/"} passHref>
				<h2 className="text-secondary cursor-pointer text-xl font-light hover:text-white sm:text-2xl md:font-medium">
					Barrett Penrod
				</h2>
			</Link>
			<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</div>
	);
};

export default TitleBar;
