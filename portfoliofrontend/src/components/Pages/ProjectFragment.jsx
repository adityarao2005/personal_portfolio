import React, { useEffect, useState } from "react";

// Project model
class Project {
	constructor(name, description, image, link, details) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.link = link;
		this.details = details;
	}
}

// Project details model
class ProjectDetails {
	constructor(
		event,
		position,
		startDate,
		endDate,
		github,
		collaborators,
		awards,
		skills,
		tools
	) {
		this.event = event;
		this.position = position;
		this.startDate = startDate;
		this.endDate = endDate;
		this.github = github;
		this.collaborators = collaborators;
		this.awards = awards;
		this.skills = skills;
		this.tools = tools;
	}
}

const projects = [
	// Sample project
	new Project(
		// Name
		"Project 1",
		// Description
		"This is a project",
		// Image
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
		// link
		"https://example.com",
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"Start date",
			// End date
			"End date",
			// Github
			"https://github.com/adityarao2005",
			// Collaborators
			["Aditya Rao"],
			// Awards
			["1st place"],
			// Skills
			["React", "HTML", "CSS", "JS"],
			// Tools
			["VS Code"]
		)
	),
	// Sample project
	new Project(
		// Name
		"Project 2",
		// Description
		"This is a project",
		// Image
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
		// link
		"https://example.com",
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"Start date",
			// End date
			"End date",
			// Github
			"https://github.com/adityarao2005",
			// Collaborators
			["Aditya Rao"],
			// Awards
			["1st place"],
			// Skills
			["React", "HTML", "CSS", "JS"],
			// Tools
			["VS Code"]
		)
	),

	// Sample project
	new Project(
		// Name
		"Project 3",
		// Description
		"This is a project",
		// Image
		"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
		// link
		"https://example.com",
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"Start date",
			// End date
			"End date",
			// Github
			"https://github.com/adityarao2005",
			// Collaborators
			["Aditya Rao"],
			// Awards
			["1st place"],
			// Skills
			["React", "HTML", "CSS", "JS"],
			// Tools
			["VS Code"]
		)
	),
];

// modal view
function ModalView(props) {
	useEffect(() => {
		if (props.visible == true) document.body.style.overflowY = "hidden";
		else document.body.style.overflowY = "unset";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, [props.visible]);

	return (
		<div
			className={
				"fixed inset-0 w-full h-full bg-gray-700/50 z-20 backdrop-blur-sm drop-shadow-md" +
				(!props.visible && " hidden")
			}
		>
			<div className='flex flex-row h-full'>
				{/*TODO: Consider shrinking the basises to 1/6, 2/3, 1/6 respectively for a smaller screen size */}
				<div className='basis-1/4' />
				<div className='basis-1/2 flex flex-col'>
					<div className='flex-1 flex flex-col my-10 bg-white rounded-2xl'>
						{/* Header */}
						<div
							className='h-40 rounded-t-2xl bg-cover bg-no-repeat bg-center'
							style={{ backgroundImage: props.background }}
						></div>
						<div className='flex-1 p-5'>{props.children}</div>
						{/* Footer */}
						<div className='p-5 flex flex-row-reverse'>
							<button
								onClick={props.toggleVisibility}
								className='bg-blue-600 text-white font-bold py-2 px-4 rounded-xl '
							>
								Close
							</button>
						</div>
					</div>
				</div>
				<div className='basis-1/4' />
			</div>
		</div>
	);
}

function ProjectViewModel(props) {
	return (
		<ModalView
			visible={props.visible}
			toggleVisibility={props.toggleVisibility}
			background={
				props.project ? `url('${props.project.image}')` : "black"
			}
		>
			{props.project && (
				<div>
					<h1 className='text-3xl font-bold'>{props.project.name}</h1>
					<p className='text-lg'>{props.project.description}</p>
					<div className='mt-5'>
						<h1 className='text-2xl font-bold'>Details</h1>
						<p className='text-lg'>
							Event: {props.project.details.event}
						</p>
						<p className='text-lg'>
							Position: {props.project.details.position}
						</p>
						<p className='text-lg'>
							Start Date: {props.project.details.startDate}
						</p>
						<p className='text-lg'>
							End Date: {props.project.details.endDate}
						</p>
						<p className='text-lg'>
							Github URL: {props.project.details.github}
						</p>
						<p className='text-lg'>
							Collaborators:{" "}
							{props.project.details.collaborators.join(", ")}
						</p>
						<p className='text-lg'>
							Awards: {props.project.details.awards.join(", ")}
						</p>
						<p className='text-lg'>
							Skills: {props.project.details.skills.join(", ")}
						</p>
						<p className='text-lg'>
							Tools: {props.project.details.tools.join(", ")}
						</p>
					</div>
				</div>
			)}
		</ModalView>
	);
}

// cards
function ProjectCard(props) {
	return (
		<div
			className='h-96 rounded-md bg-cover bg-center bg-no-repeat p-5 text-white hover:cursor-pointer transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-200'
			style={{ backgroundImage: `url(${props.project.image})` }}
			onClick={props.onClick}
		>
			<div className='backdrop-blur-[2px]'>
				<h1 className='text-3xl font-bold'>{props.project.name}</h1>
				<p className='text-lg'>View Description</p>
			</div>
		</div>
	);
}

export default function ProjectFragment() {
	// Main fragment for the projects page
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const toggleVisibility = (project) => {
		setModalVisible(!modalVisible);
		setSelectedProject(project);
	};

	return (
		<>
			<div className='w-screen h-fit flex-1 bg-emerald-50 p-10 relative'>
				<ProjectViewModel
					visible={modalVisible}
					toggleVisibility={() => toggleVisibility(null)}
					project={selectedProject}
				/>
				<div className='mb-10'>
					<h1
						className={
							"text-center mx-auto text-black text-3xl md:text-6xl font-semibold font-['Poppins']"
						}
					>
						Projects
					</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{projects.map((project) => (
						<ProjectCard
							key={project.name}
							project={project}
							onClick={() => toggleVisibility(project)}
						/>
					))}
				</div>
			</div>
		</>
	);
}
