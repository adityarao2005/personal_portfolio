import React from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

function Button(props) {
	return (
		<button
			className='bg-black sm-exclusive:w-full rounded-lg text-center text-white pt-2 pb-2 pl-4 pr-4 hover:bg-slate-700 active:bg-slate-900'
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
