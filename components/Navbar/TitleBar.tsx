import MenuButton from "../../components/MenuButton";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const TitleBar = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<div className="sticky top-0 z-20 flex items-center justify-between bg-primary px-8 md:pt-6">
			<h2 className="font-light text-secondary md:text-2xl md:font-medium">
				Barrett Penrod
			</h2>
			<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</div>
	);
};

export default TitleBar;
