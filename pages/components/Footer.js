const Footer = (props) => {
	return (
		<footer className="flex flex-col justify-self-end md:flex-row bg-primary-200 items-center justify-center">
			{/* Logo */}
			<div>
				<h1
					className="text-4xl font-semibold text-primary-800"
					style={{ lineHeight: "3rem" }}
				>
					Barrett Penrod
				</h1>
				<p className="text-primary-600">
					Actor - Singer - Teacher - Director
				</p>
			</div>
		</footer>
	);
};

export default Footer;
