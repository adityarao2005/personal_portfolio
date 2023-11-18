import React, { useState, useEffect } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';

function HomePage() {
	const [typingText, setTypingText] = useState("");
	const [arrayIndex, setArrayIndex] = useState(0);
	const [stringIndex, setStringIndex] = useState(0);
	const [goingForward, setGoingForward] = useState(true);
	const [sleeping, setSleeping] = useState(false);
	const [sleepCounter, setSleepCounter] = useState(0);
	const whoIam = ["Software Engineer", "Fullstack Web Developer", "Application\'s Developer", "CS Tutor", "Database Architect", "Math and CS enthusiast"];
	const [blinkPointer, setBlinkPointer] = useState(true);

	// Config
	const timeoutForTyping = 100;

	// Create the typing effect
	useEffect(() => {
		setTimeout(() => {

			// If we are currently sleeping
			if (sleeping) {
				// increment the sleep counter
				setSleepCounter(sleepCounter + 1);

				// Create the blinking effect
				if (sleepCounter % 10 == 0) {
					setBlinkPointer(true);
				} else if (sleepCounter % 5 == 0) {
					setBlinkPointer(false);
				}

				// If we've counted 20 times then invert it and go backwards
				if (sleepCounter == 20) {
					setSleeping(false);
					setGoingForward(false);
					setSleepCounter(0);
					setBlinkPointer(true);

				}

				return;
			}

			// If we are going forward
			if (goingForward) {

				// If the index is less than the length
				if (stringIndex < whoIam[arrayIndex].length) {
					// add a character to the typingText
					setTypingText(typingText + whoIam[arrayIndex].charAt(stringIndex));

					// increment the index
					setStringIndex(stringIndex + 1);
				}
				// if it is at the length
				else {
					// pause for a bit
					setSleeping(true);
				}

				// If we are going back
			} else {

				// If the index is less than the length
				if (stringIndex > 0) {
					// add a character to the typingText
					setTypingText(typingText.slice(0, -1));

					// increment the index
					setStringIndex(stringIndex - 1);
				}
				// if it is at the length
				else {
					setGoingForward(true);
					setArrayIndex((arrayIndex + 1) % whoIam.length);
				}
			}


		}, timeoutForTyping);
	});

	return (
		<div id="home">
			<Jumbotron>
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					Hello, My name is Aditya Rao</h1>
				<span className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
					I am a <b>{typingText}</b></span>
				<span className={"mb-8 text-2xl font-normal text-red-700 lg:text-3xl sm:px-16 lg:px-50 " + (!blinkPointer ? "invisible" : "")}><b>|</b></span>
			</Jumbotron>

			<div className="flex flex-col phone:flex-row phone:flex-wrap p-4">
				<div className="phone:basis-1/3 min-h-96  min-w-48 max-h-sm max-w-sm">
					<img src="/photo_of_me.jpg" className="object-cover rounded-lg object-top md:object-scale-down" />
				</div>
				<div className="phone:grow" />
				<div className="phone:basis-1/2 space-y-4 grow">
					<div>
						<h1 className="mb-4 text-center text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">Who am I?</h1>

						<div className="h-sm" />
						<p className="text-lg">My name is Aditya Rao. I graduated from Bur Oak Secondary School in Markham with Honors and I am currently a first year university student at McMaster Engineering studying Software Engineering. I have a great passion for mathematics and the sciences, especially Computer Science, and I love innovating, deriving, researching, and applying the knowledge and concepts that I've learned in highschool and university. My goal is to pursue and apply these concepts furthur on in the industry and hopefully pass on what I've learned in my life to the next generation of innovators.</p>
					</div>
					<div className="w-full">
						<button className="rounded-xl bg-blue-400 shadow-lg text-center text-white p-4 w-full">Download CV</button>
					</div>
					<div className="flex flex-row w-full flex-nowrap justify-evenly ">
						<a href="https://github.com/adityarao2005" target="_blank" className="hover:text-red-700 fab fa-github fa-2x"></a>
						<a href="https://instagram.com/epicbird4410" target="_blank" className="hover:text-red-700 fab fa-instagram fa-2x"></a>
						<a href="https://linkedin.com/in/aditya-g-rao" target="_blank" className="hover:text-red-700 fab fa-linkedin fa-2x"></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;