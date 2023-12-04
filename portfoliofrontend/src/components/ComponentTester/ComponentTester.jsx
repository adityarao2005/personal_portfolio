import React from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavComponent from "../NavComponent/NavComponent";

function TableHeader(props) {
	return <th className='border border-slate-300'>{props.children}</th>;
}

function TableCell(props) {
	return <td className='border border-slate-300'>{props.children}</td>;
}

function ComponentTester() {
	const whoIam = [
		"Software Engineer",
		"Fullstack Web Developer",
		"Application's Developer",
		"CS Tutor",
		"Database Architect",
		"Math and CS enthusiast",
	];
	return (
		<div>
			<table className='border-collapse border border-slate-400 table-auto w-full'>
				<thead>
					<tr>
						<TableHeader>Name</TableHeader>
						<TableHeader>Component</TableHeader>
					</tr>
				</thead>
				<tbody>
					<tr>
						<TableCell>Button</TableCell>
						<TableCell>
							<Button onClick={() => console.log("Clicked")}>
								Click Me
							</Button>
						</TableCell>
					</tr>
					<tr>
						<TableCell>Typing Animation</TableCell>
						<TableCell>
							<TypingAnimation data={whoIam} />
						</TableCell>
					</tr>
					<tr>
						<TableCell>Header</TableCell>
						<TableCell>
							<Header>Header</Header>
						</TableCell>
					</tr>
					<tr>
						<TableCell>Icon</TableCell>
						<TableCell>
							<div className='rounded-full bg-red-400'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
						</TableCell>
					</tr>
					<tr>
						<TableCell>Navbar</TableCell>
						<TableCell>
							<NavComponent
								links={[
									{ text: "Home", href: "#" },
									{ text: "About", href: "#" },
									{ text: "Services", href: "#" },
									{ text: "Pricing", href: "#" },
									{ text: "Contact", href: "#" },
								]}
								brandText='Flowbite'
								brandIcon='https://flowbite.com/docs/images/logo.svg'
							/>
						</TableCell>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ComponentTester;
