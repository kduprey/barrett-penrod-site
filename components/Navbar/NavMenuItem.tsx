import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { NavMenu } from "../../types";

type Props = {
	menu: NavMenu;
};

const NavMenuItem = ({ menu }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	if (menu.sublinks)
		return (
			<div className="relative">
				<button
					onMouseEnter={(e) => setIsOpen(!isOpen)}
					onMouseLeave={(e) => setIsOpen(!isOpen)}
					onClick={(e) => setIsOpen(!isOpen)}
					className="inline-flex justify-center text-sm py-2 px-4 bg-slate-900 bg-opacity-20 hover:bg-opacity-30 rounded"
				>
					{menu.name}
				</button>
				<Transition
					show={isOpen}
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<div
						onMouseEnter={(e) => setIsOpen(!isOpen)}
						onMouseLeave={(e) => setIsOpen(!isOpen)}
						className="absolute flex flex-col py-1 px-1 left-0 overflow-auto divide-slate-100 rounded-md shadow-lg focus:outline-none mt-2 origin-top-left bg-white divide-y"
					>
						{menu.sublinks.map((e, i) => (
							<div key={i}>{e.name}</div>
						))}
					</div>
				</Transition>
			</div>
		);
	if (menu.path)
		return (
			<Link href={menu.path} passHref>
				<a className="text-sm">{menu.name}</a>
			</Link>
		);
	return <p>{menu.name}</p>;
};

export default NavMenuItem;
