import { useState } from "react";
import Layout from "../../components/Layout";
import { packages } from "../../data/services";
import { NextPageWithLayout } from "../../types";
import { setCookie } from "cookies-next";
import PackageModal from "../../components/Bookings/PackageModal";
import VsLogo from "/public/vslogo.svg";

type Props = {};

const Packages: NextPageWithLayout = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState<string>("");

	return (
		<section className="flex flex-col items-center justify-evenly p-4">
			<PackageModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				selectedPackage={selectedPackage}
			/>

			<div className="w-3/4 bg-white p-3 shadow-lg shadow-black md:w-1/4">
				<VsLogo />
			</div>
			<h2 className="py-6 text-center text-secondary">Packages</h2>
			<div className="flex w-full flex-col items-center justify-evenly space-y-6 md:flex-row md:space-x-6 md:space-y-0">
				{packages.map((lessonPackage) => {
					return (
						<div
							key={lessonPackage.title}
							className="flex flex-col items-center justify-center space-y-3 rounded-lg bg-secondary p-6 shadow-md "
						>
							<h4 className="text-center">
								{lessonPackage.title}
							</h4>
							<p className="text-center text-primary">
								{lessonPackage.discount}
							</p>
							<p className="text-center text-3xl font-bold text-primary">
								${lessonPackage.price}
							</p>
							<button
								className="cursor-pointer bg-primary text-secondary"
								onClick={(e) => {
									setIsOpen(true);
									setSelectedPackage(lessonPackage.title);
									setCookie("packageInfo", lessonPackage, {
										maxAge: 60 * 30,
										sameSite: "strict",
										secure: true,
									});
								}}
							>
								Reserve Now!
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Packages;

Packages.getLayout = (page) => <Layout>{page}</Layout>;
