import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import Button from "../Button/Button";
import profile from "../../assets/images/profile-photo.jpg";

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
		<div className="text-black text-lg md:text-xl font-normal font-['Poppins']">
			{props.children}
		</div>
	);
}

export default function HomeFragment() {
	return (
		<div className='w-screen h-screen flex-1'>
			<div className='grid md:h-full'>
				<div className='col-start-1 row-start-1 flex flex-col md:flex-row gap-4 md:pr-4 md:pl-4 z-10'>
					{/* 
						This is the social media links
					*/}
					<div className='flex-none md:w-24'>
						<div className='flex flex-row md:flex-col items-center gap-4'>
							<div className='flex-1'></div>
							<Icon icon={faGithub} />
							<Icon icon={faLinkedin} />
							<Icon icon={faInstagram} />
							<Icon icon={faDiscord} />
							<Icon icon={faEnvelope} />
							<div className='flex-1'></div>
						</div>
					</div>
					<div className='flex-auto flex flex-col md:flex-row'>
						{/*
								This is the column for developer stuff
							*/}
						<div className='flex-1 flex flex-col-reverse'>
							<div className='order-last mb-2 sm-exclusive:mx-4'>
								<h1
									className={
										"text-black font-bold text-3xl md:text-6xl font-['Poppins']"
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
							<div className='flex flex-col md:flex-row order-first pb-20 sm-exclusive:mx-4'>
								<div className='flex-auto w-full md:w-64'>
									<Text>
										Im a cool developer in McMaster
										University (Rest of the stuff go here)
									</Text>
								</div>
								<div className='flex-auto w-full md:w-32'>
									<Button>View Projects</Button>
								</div>
							</div>
						</div>
						{/*
								This is the column for art stuff
							*/}
						<div className='flex-1 flex flex-col sm-exclusive:mx-4 pt-4'>
							<div className='flex-none'>
								<h1
									className={
										"text-black text-3xl md:text-6xl font-semibold font-['Poppins']"
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
							<div className='md:flex-1'></div>
							<div className='md:pb-20 pb-5 flex md:flex-row-reverse'>
								<div className='pt-2 md:pr-20 sm-exclusive:w-full'>
									<button className='bg-black rounded-lg text-center text-white md:text-5xl w-full md:w-80 md:py-10 py-4 px-4 hover:bg-slate-700 active:bg-slate-900'>
										Download Resume
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*
				This is the background image
				*/}
				<div className='justify-center sm-exclusive:block col-start-1 row-start-1 self-center z-0 align-middle justify-content-center text-center display-inline-block'>
					<img
						src={profile}
						alt='logo'
						className='w-1/2 h-1/2 mx-auto align-center text-center rounded-full'
					/>
				</div>
			</div>
		</div>
	);
}
