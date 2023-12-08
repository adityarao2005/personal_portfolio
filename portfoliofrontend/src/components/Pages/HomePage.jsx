import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Header from "../Header/Header";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import Button from "../Button/Button";

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

function Text(props) {
	return (
		<div className="text-black text-xl font-normal font-['Poppins']">
			{props.children}
		</div>
	);
}

function HomePage() {
	return (
		<div className='flex-1'>
			<div className='grid h-full'>
				<div className='col-start-1 row-start-1 flex gap-4 pr-4 pl-4 z-10'>
					<div className='flex-none w-24'>
						<div className='flex flex-col items-center gap-4'>
							<Icon icon={faGithub} />
							<Icon icon={faLinkedin} />
							<Icon icon={faInstagram} />
							<Icon icon={faDiscord} />
							<Icon icon={faEnvelope} />
						</div>
					</div>
					<div className='flex-auto flex flex-row'>
						<div className='flex-1 flex flex-col-reverse'>
							<div className='order-last mb-2'>
								<h1
									className={
										"text-black text-6xl font-semibold font-['Poppins']"
									}
								>
									<TypingAnimation
										data={[
											"Software Engineer",
											"Fullstack Web Developer",
											"Application Developer",
											"CS Tutor",
											"Database Architect",
											"Math and CS enthusiast",
										]}
										cursorStyles='text-red-700'
									/>
								</h1>
							</div>
							<div className='flex flex-row order-first pb-20'>
								<div className='flex-auto w-64'>
									<Text>
										Im a cool developer in McMaster
										University (Rest of the stuff go here)
									</Text>
								</div>
								<div className='flex-auto w-32'>
									<Button>View Projects</Button>
								</div>
							</div>
						</div>
						<div className='flex-1 flex flex-col'>
							<div className='flex-none'>
								<h1
									className={
										"text-black text-6xl font-semibold font-['Poppins']"
									}
								>
									Artist
								</h1>
								<Text>
									I have been an artist for most of my
									elementary and highschool career and have
									made many sketches over the years.
								</Text>
								<Button>View Art Portfolio</Button>
							</div>
							<div className='flex-1'></div>
							<div className='pb-20 flex flex-row-reverse'>
								<div className='pr-20'>
									<button className='bg-black rounded-lg text-center text-white text-5xl w-80 py-10 px-4 hover:bg-slate-700 active:bg-slate-900'>
										Download Resume
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='justify-center col-start-1 row-start-1 self-center z-0'>
					<svg
						className='text-center block m-auto w-1/2 opacity-50'
						viewBox='0 0 100 100'
					>
						<circle
							cx='50'
							cy='50'
							r='40'
							stroke='green'
							strokeWidth='4'
							fill='yellow'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
