import React, { useState, useEffect } from "react";
import NavComponent from "../NavComponent/NavComponent";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<NavComponent
				links={[
					{ id: "1", text: "Home", href: "/" },
					{ id: "2", text: "About", href: "/about" },
					{ id: "3", text: "Projects", href: "/projects" },
					{ id: "4", text: "Vision", href: "/vision" },
					{ id: "5", text: "Artwork", href: "/artwork" },
					{ id: "6", text: "Contact", href: "/contact" },
					{ id: "7", text: "Components", href: "/components" },
				]}
				brandText={<b>Aditya Rao</b>}
			/>

			<Outlet />
		</>
	);
}

export default Layout;
