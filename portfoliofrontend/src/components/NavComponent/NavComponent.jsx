import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Link(props) {
	return (
		<li>
			<NavLink
				to={props.href}
				className={({ isActive }) =>
					[
						"block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
						isActive
							? "text-gray-900 dark:text-white"
							: "text-gray-500 dark:text-gray-500",
					].join(" ")
				}
			>
				{props.text}
			</NavLink>
		</li>
	);
}

function HamburgerMenu(props) {
	return (
		<button
			type='button'
			className={props.className}
			onClick={props.onClick}
		>
			<span className='sr-only'>Open main menu</span>
			<svg
				className='w-5 h-5'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 17 14'
			>
				<path stroke='currentColor' d='M1 1h15M1 7h15M1 13h15' />
			</svg>
		</button>
	);
}

const NavComponent = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className='flex-none bg-white border-gray-200 dark:bg-gray-900'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a
					href='/'
					className='flex items-center space-x-3 rtl:space-x-reverse'
				>
					{props.brandIcon && (
						<img
							src={props.brandIcon}
							className='h-8'
							alt='Brand Logo'
						/>
					)}
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						{props.brandText}
					</span>
				</a>
				<HamburgerMenu
					className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					onClick={toggleMenu}
				/>
				<div
					className={
						"w-full md:block md:w-auto " +
						(isMenuOpen ? "block" : "hidden")
					}
				>
					<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						{props.links.map((link) => (
							<Link
								href={link.href}
								key={link.id}
								text={link.text}
							/>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavComponent;
