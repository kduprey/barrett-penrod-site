// import VsLogo from "/public/vslogo.svg";
import Image from "next/image";
import VSLogo from "/public/vslogo.jpg";

const Logo = () => {
	return (
		<div className="logo p-4">
			<Image src={VSLogo} alt="Barrett Penrod Voice Studio Logo" />
		</div>
	);
};

export default Logo;
