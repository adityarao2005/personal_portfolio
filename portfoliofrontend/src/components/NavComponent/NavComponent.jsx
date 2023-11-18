import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

// Navbar component
function NavComponent() {

	// Create the states
	// First state is to check if we are hiding the button
	const [hiddenLess400, setHiddenLess400] = useState(true);
	// Second state is to check which button is active
	const [active, setActive] = useState("1");

	// These are links for the page
	const links = [
		{ id: "1", title: "Home", link: "#home" },
		{ id: "2", title: "Projects", link: "#projects" },
		{ id: "3", title: "About me", link: "#about-me" },
		{ id: "4", title: "Vision", link: "#vision" },
		{ id: "5", title: "Art Portfolio", link: "#art-portfolio" },
		{ id: "6", title: "Contact me", link: "#contact-me" }
	];

	// Return
	return (
		<div className="tablet:col-start-1 tablet:col-end-2 bg-white flex tablet:h-screen flex-col phone:justify-center gap-4 tablet:justify-start justify-start phone:flex-row tablet:flex-col sticky top-0">
			<button className="text-center block phone:hidden" onClick={() => setHiddenLess400(!hiddenLess400)}>
				<FontAwesomeIcon icon={hiddenLess400 ? faBars : faXmark} />
			</button>

			{links.map((page) =>
				<NavLink
					key={page.id}
					hidden={hiddenLess400}
					active={active == page.id}
					page={page}
					onClick={() => { setActive(page.id); return true; }} />
			)}
		</div>
	);
}

function NavLink(props) {
	const defaultClassStr = "text-center phone:inline-block tablet:block bg-gray-300 rounded-lg p-2 m-2 hover:bg-gray-400 active:bg-gray-500 ";
	const hiddenStr = (props.hidden ? "hidden " : "");
	const activeStr = (props.active ? "active " : "");

	const classStr = defaultClassStr + hiddenStr + activeStr;

	return <a
		className={classStr}
		href={props.page.link}
		onClick={props.onClick}>
		{props.page.title}
	</a>;
}

export default NavComponent;