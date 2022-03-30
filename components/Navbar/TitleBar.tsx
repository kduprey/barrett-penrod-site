import MenuButton from "../../components/MenuButton";

type Props = {
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
};

const TitleBar = ({ isOpen, setOpen }: Props) => {
	return (
		<div className="sticky top-0 bg-primary flex justify-between items-center px-6">
			<h2 className="text-secondary font-light">Barrett Penrod</h2>
			<MenuButton isOpen={isOpen} setOpen={setOpen} />
		</div>
	);
};

export default TitleBar;
