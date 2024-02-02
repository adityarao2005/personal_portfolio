import React, { useState, useEffect } from "react";
import NavComponent from "../NavComponent/NavComponent";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<div className='w-full h-full flex flex-col'>
				<NavComponent
					links={[
						{ text: "Home", href: "#root" },
						{ text: "About", href: "#about" },
						{ text: "Projects", href: "#projects" },
						{ text: "Artwork", href: "#artwork" },
						{ text: "Contact", href: "#contact-me" },
					]}
					brandText={<b>Aditya Rao</b>}
				/>

				<Outlet />
			</div>
		</>
	);
}

export default Layout;
