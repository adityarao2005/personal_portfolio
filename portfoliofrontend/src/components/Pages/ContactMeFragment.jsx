import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faAirFreshener, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Icon(props) {
	return (
		<div className='flex-none w-12 h-12 bg-blue-300 rounded-full hover:cursor-pointer align-middle text-center hover:bg-blue-400 active:bg-blue-200'>
			<FontAwesomeIcon
				icon={props.icon}
				className='translate-y-1/4 align-middle text-center'
				size='2x'
			/>
		</div>
	);
}

export default function ContactMeFragment() {
	return (
		<div id='contact-me' className='p-10'>
			<h1 className='text-4xl font-bold text-center text-black my-10'>
				Contact Me Via Social Media
			</h1>

			<div className='flex flex-row items-center gap-4'>
				<div className='flex-1'></div>
				<Icon icon={faGithub} />
				<Icon icon={faLinkedin} />
				<Icon icon={faInstagram} />
				<Icon icon={faDiscord} />
				<Icon icon={faEnvelope} />
				<div className='flex-1'></div>
			</div>

			<div className='flex flex-col gap-4 mx-20 my-10 ring rounded-xl p-4'>
				<h1 className='text-4xl font-bold text-center text-black'>
					Or Send Me A Message
				</h1>
				<div className='flex flex-row'>
					<div className='flex-1 flex flex-row'>
						<input
							type='text'
							placeholder='Name'
							className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
						/>
					</div>
					<div className='flex-1 flex flex-row'>
						<input
							type='email'
							placeholder='Email'
							className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
						/>
					</div>
				</div>

				<div className='flex-1 flex flex-row'>
					<input
						type='text'
						placeholder='Subject'
						className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
					/>
				</div>

				<div className='flex-1 flex flex-row'>
					<textarea
						placeholder='Message'
						className='p-2 mx-2 flex-1 border-2 h-32 border-gray-500 rounded-md'
					/>
				</div>
				<button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-xl '>
					<FontAwesomeIcon icon={faPaperPlane} /> Send
				</button>
			</div>
		</div>
	);
}
