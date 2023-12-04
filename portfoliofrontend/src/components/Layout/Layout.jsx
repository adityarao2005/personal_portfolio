import React, { useState, useEffect } from "react";
import NavComponent from "../NavComponent/NavComponent";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<NavComponent
				links={[
					{ text: "Home", href: "/" },
					{ text: "About", href: "/about" },
					{ text: "Projects", href: "/projects" },
					{ text: "Vision", href: "/vision" },
					{ text: "Artwork", href: "/artwork" },
					{ text: "Contact", href: "/contact" },
					{ text: "Components", href: "/components" },
				]}
				brandText={<b>Aditya Rao</b>}
			/>

			<Outlet />
		</>
	);
}

export default Layout;
