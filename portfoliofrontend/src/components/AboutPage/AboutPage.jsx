import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';

function AboutPage() {
	// Create an accordion
	return (
		<div>
			<Jumbotron>
				<h1 id="about-me" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Me</h1>
			</Jumbotron>

			<div className="mt-4">
				<Accordion>
					<AccordionElement title="Early Life">
						I lived in Markham
					</AccordionElement>
					<AccordionElement title="Education">
						I study Engineering
					</AccordionElement>
					<AccordionElement title="Love for Science and Coding">
						I like science and math
					</AccordionElement>
					<AccordionElement title="Awards and Achievements">
						I've won many awards
					</AccordionElement>
				</Accordion>
			</div>
		</div>
	);
}

function Accordion(props) {
	return (<div className="my-4">{props.children}</div>);

}

function AccordionElement(props) {
	const [contentHidden, setContentHidden] = useState(true);

	return (
		<div>
			<button className="w-full bg-gray-400" onClick={() => setContentHidden(!contentHidden)}>{props.title}</button>
			<div className={"px-18 overflow-hidden " + (contentHidden ? "hidden" : "block")}>
				{props.children}
			</div>
		</div>
	);
}

export default AboutPage;