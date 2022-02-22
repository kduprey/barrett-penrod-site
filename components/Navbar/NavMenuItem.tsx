import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { NavMenu } from "../../types";

type Props = {
	menu: NavMenu;
};

const NavMenuItem = ({ menu }: Props) => {
	// let timeout; // NodeJS.Timeout
	// const timeoutDuration = 400;

	// const buttonRef = useRef(null); // useRef<HTMLButtonElement>(null)
	// const [openState, setOpenState] = useState(false);

	// const toggleMenu = (open) => {
	// 	// log the current open state in React (toggle open state)
	// 	setOpenState((openState) => !openState);
	// 	// toggle the menu by clicking on buttonRef
	// 	buttonRef?.current?.click(); // eslint-disable-line
	// };

	// // Open the menu after a delay of timeoutDuration
	// const onHover = (open, action) => {
	// 	// if the modal is currently closed, we need to open it
	// 	// OR
	// 	// if the modal is currently open, we need to close it
	// 	if (
	// 		(!open && !openState && action === "onMouseEnter") ||
	// 		(open && openState && action === "onMouseLeave")
	// 	) {
	// 		// clear the old timeout, if any
	// 		clearTimeout(timeout);
	// 		// open the modal after a timeout
	// 		timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
	// 	}
	// 	// else: don't click! 😁
	// };

	// const handleClick = (open) => {
	// 	setOpenState(!open); // toggle open state in React state
	// 	clearTimeout(timeout); // stop the hover timer if it's running
	// };

	if (menu.sublinks)
		return (
			<Menu as="div" className="relative">
				<Menu.Button className="inline-flex justify-center text-sm py-2 px-4 bg-slate-900 bg-opacity-20 hover:bg-opacity-30 rounded">
					{menu.name}
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute flex flex-col py-1 px-1 left-0 w-auto divide-slate-100 rounded-md shadow-lg focus:outline-none mt-2 origin-top-left bg-white divide-y">
						{menu.sublinks.map((e, i) => (
							<Menu.Item as="a" key={i}>
								{e.name}
							</Menu.Item>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
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
