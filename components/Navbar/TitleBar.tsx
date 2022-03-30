import MenuButton from "../../components/MenuButton";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const TitleBar = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<div className="sticky top-0 bg-primary flex justify-between items-center px-6">
			<h2 className="text-secondary font-light">Barrett Penrod</h2>
			<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</div>
	);
};

export default TitleBar;
