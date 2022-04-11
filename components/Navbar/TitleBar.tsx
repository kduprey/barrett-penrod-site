import MenuButton from "../../components/MenuButton";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const TitleBar = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<div className="sticky top-0 z-50 flex items-center justify-between bg-primary px-8 md:pt-6">
			<h2 className="text-xl font-light text-secondary sm:text-2xl md:font-medium">
				Barrett Penrod
			</h2>
			<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</div>
	);
};

export default TitleBar;
