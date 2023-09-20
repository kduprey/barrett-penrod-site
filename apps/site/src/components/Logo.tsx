import Image from "next/image";
import VSLogo from "../../public/vslogo.jpg";

export const Logo = (): JSX.Element => (
	<div className="logo p-4">
		<Image alt="Barrett Penrod Voice Studio Logo" src={VSLogo} />
	</div>
);
