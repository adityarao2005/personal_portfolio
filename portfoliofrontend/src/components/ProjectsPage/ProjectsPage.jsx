import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';

function ProjectsPage() {
	// soon will make this a web service
	const projects = [
		{
			title: "AutoCode Framework",
			detail: "The \'One Framework to Rule them All\'",
			description: "My greatest passion for programming. The vision is for it to be the \"one framework for all\". Inspired by the Spring framework, Creating this framework is a challenge as it shows my deep understanding of the applications of many fundamental concepts. Developing a fully functional framework for all kinds of development from Web development to AI to GUI. Created an IoC container, a Bean\'s lifecycle and management framework, and a mathematical expression parser and evaluator. Currently working on producing an ORM and Web MVC framework",
			startDate: "Jan, 2023",
			endDate: null, // present
			where: {
				type: "Personal",
				url: "https://github.com/adityarao2005/AutoCode"
			},
			skills: ["Core Java", "Framework development", "Software Engineering", "Control flow"]
		},
		{
			title: "Sample Ecommerce Web Application",
			detail: "A sample ecommerce app which local businesses or retailers can use to act as a gateway to their service, manage their customers, transactions, supplies, and employees.",
			description: "Created a sample template e-commerce app for any local business to use. Has both a customer side, an employee side, and an admin side. Used Spring and Hibernate, to create the infrastructure of the project.Managed payment system via Stripe and used Gmail API to send autonomous emails.Constructed user authentication and authorization, transaction management, status of each product and many more features.",
			startDate: "Dec, 2021",
			endDate: "Mar, 2022",
			where: {
				type: "Personal",
				position: "Solo Programmer",
				url: "https://github.com/adityarao2005/SampleEcommmerceApp"
			},
			skills: ["Java", "MVC", "Spring Boot", "Hibernate", "Stripe", "Bootstrap", "JQuery", "MySQL"]
		},
		{
			title: "ActiveQuest Fitness App",
			detail: "Blend of both worlds, gain benefits of being healthy and active and being able to communicate and challenge your friends. This app is made to help and encourage people, teenagers especially, to workout as working out can be fun even if you are working out alone.",
			description: "Oversaw the software development life cycle at Active Quest, directing over 20 developers to complete the project two weeks ahead of time, increasing completion rates by 30 percent, and resulting in a 100% increase in daily active users. Integrated MySQL as the database management system to provide a dependable and scalable architecture for the Active Quest application.This allowed for a 40 % increase in query performance and a 60 % increase in user base expansion without experiencing any downtime. Created a custom ORM framework built from the raw servlets and JDBC API to assist with development to give my peers a basic understanding and experience in web development.",
			startDate: "Jan, 2023",
			endDate: null, // present
			where: {
				type: "For fun",
				location: "Markham (virtual)",
				position: "Founder and Project Manager",
				url: "https://github.com/orgs/Innovoak/repositories"
			},
			skills: ["Java", "Web MVC", "Rest", "Android", "Servlets", "SQL", "Teamwork", "Leadership"]
		},
		{
			title: "FRC First Robotics Robot",
			detail: "We built a robot for our school, Bur Oak Secondary School, to participate and represent our school in the FRC First Robotics Competition.",
			description: "Oversaw and led the Software Team in the construction, development, testing, and debugging of the robot\'s programming. Worked with WPLib in Java with my peers to create a fully functional robot that has the capability of being able to drive, pick up cones and cubes, and balance on a moving platform using a gyroscope",
			startDate: "Jan, 2023",
			endDate: "May, 2023",
			where: {
				type: "School Team",
				location: "Markham, Bur Oak Secondary school",
				position: "Software Team Lead",
				url: "https://github.com/adityarao2005/BOSS-Robotics-2023-Code"
			},
			skills: ["Java", "Command Based Programming", "Mechatronics Engineering", "WPLib interface", "Teamwork", "Leadership"]
		},
		{
			title: "Task Management and Scheduling App",
			detail: "I created a task management and scheduling application which helps the daily user or an office user to create and manage their tasks that which they have to perform in both the short term and long term.",
			description: "Created an enterprise-grade calendar for my culminating in Grade 12 Computer Science course at school. Imagine it to be a mirror of Outlook with Google Classroom Integration in Java geared towards Task Management and Task Scheduling. Has features such as adding events, reading events from Google Classroom, creating sub - tasks, creating and managing reminders and alerting systems, and a Pomodoro system to ensure completion of tasks.",
			startDate: "May, 2023",
			endDate: "Jun, 2023",
			where: {
				type: "School Final Project",
				location: "Markham, Bur Oak Secondary school",
				position: "Solo Programmer",
				url: "https://github.com/adityarao2005/EnterpriseCalendarApp"
			},
			skills: ["Java", "Command Based Programming", "Mechatronics Engineering", "WPLib interface", "Teamwork", "Leadership"]
		},
	];


	return (
		<div>
			<Jumbotron>
				<h1 id="projects" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">My Projects</h1>
			</Jumbotron>
			{
				// Card grid
			}
			<div className="my-4 px-4 grid grid-cols-1 phone:grid-cols-2 gap-4">
				{projects.map((project) => <ProjectCard key={project.title}  project={project} />)}
			</div>
		</div>
	);
}

function ProjectCard(props) {
	return (
		<div className="bg-blue-200 ">
			<div>Title: {props.project.title}</div>
			<div>Detail: {props.project.detail}</div>
			<div>Description: {props.project.description}</div>
			<div>Skills: {props.project.skills}</div>
		</div>
	);
}

export default ProjectsPage;