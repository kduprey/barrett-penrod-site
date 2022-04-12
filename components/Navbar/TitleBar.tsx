import Link from "next/link";
import MenuButton from "../../components/MenuButton";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const TitleBar = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<div className="sticky top-0 z-50 flex items-center justify-between bg-primary px-8 md:pt-6">
			<Link href={"/"} passHref>
				<h2 className="cursor-pointer text-xl font-light text-secondary hover:text-white sm:text-2xl md:font-medium">
					Barrett Penrod
				</h2>
			</Link>
			<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</div>
	);
};

export default TitleBar;
