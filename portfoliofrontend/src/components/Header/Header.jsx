import React from "react";

function Header(props) {
	return (
		<div>
			<h1 className="text-black text-8xl font-semibold font-['Poppins']">
				{props.children}
			</h1>
		</div>
	);
}

export default Header;
