import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
			null,
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
		null,
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
		null,
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
		null,
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
		null,
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
function ProjectViewModel(props) {
	return (
		<Modal
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
					<div className='mt-5 flex flex-row'>
						<div className='flex-1'>
							<h1 className='text-2xl font-bold'>Details</h1>
							{props.project.details.event && (
								<p className='text-lg'>
									<b>Associated With</b>:{" "}
									{props.project.details.event}
								</p>
							)}
							{props.project.details.position && (
								<p className='text-lg'>
									<b>Position</b>:{" "}
									{props.project.details.position}
								</p>
							)}
							{props.project.details.startDate && (
								<p className='text-lg'>
									<b>Start Date</b>:{" "}
									{props.project.details.startDate}
								</p>
							)}
							{props.project.details.endDate && (
								<p className='text-lg'>
									<b>End Date</b>:{" "}
									{props.project.details.endDate}
								</p>
							)}

							{props.project.details.github && (
								<p className='text-lg'>
									<b>Github Repo</b>:{" "}
									<a
										href={props.project.details.github}
										target='_blank'
										className='hover:underline text-blue-500'
									>
										Click Me to View
									</a>
								</p>
							)}

							{props.project.details.collaborators && (
								<p className='text-lg'>
									<b>Key Collaborators</b>:{" "}
									{props.project.details.collaborators.join(
										", "
									)}
								</p>
							)}

							{props.project.details.awards && (
								<p className='text-lg'>
									<b>Awards</b>:{" "}
									{props.project.details.awards.join(", ")}
								</p>
							)}

							{props.project.details.skills && (
								<p className='text-lg'>
									<b>Skills</b>:{" "}
									{props.project.details.skills.join(", ")}
								</p>
							)}

							{props.project.details.tools && (
								<p className='text-lg'>
									<b>Tools</b>:{" "}
									{props.project.details.tools.join(", ")}
								</p>
							)}
						</div>
						{props.project.link && (
							<div className='flex-1 flex flex-col'>
								<h1 className='text-2xl font-bold'>
									View Demo
								</h1>
								<br />
								<a
									href={props.project.link}
									target='_blank'
									className='flex-1'
								>
									<div className='h-full relative border border-black hover:cursor-pointer transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-200'>
										<div className='flex absolute inset-0 z-30'>
											<div className='flex-1'></div>
											<div className='flex flex-col'>
												<div className='flex-1'></div>
												<FontAwesomeIcon
													icon={faUpRightFromSquare}
													size='6x'
													className='backdrop-blur-[1px]'
													stroke='white'
													strokeWidth={4}
												/>
												<div className='flex-1'></div>
											</div>
											<div className='flex-1'></div>
										</div>

										<div className='absolute inset-0 inline-block z-20'></div>

										<iframe
											src={props.project.link}
											className='w-full h-full absolute inset-0 z-10 blur-[1px]'
										></iframe>
									</div>
								</a>
							</div>
						)}
					</div>
				</div>
			)}
		</Modal>
	);
}

// cards
function ProjectCard(props) {
	return (
		<div
			className={
				"h-96 rounded-md bg-cover bg-center bg-no-repeat p-5 text-white hover:cursor-pointer transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-95 hover:bg-indigo-500 duration-200 " +
				(props.visible ? "" : "hidden")
			}
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
	const [shownProjects, setShownProjects] = useState(4);

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
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							onClick={() => toggleVisibility(project)}
							visible={index < shownProjects}
						/>
					))}
				</div>
				{shownProjects < projects.length && (
					<div className='p-5 flex flex-row'>
						<div className='flex-1 h-[1px] my-auto bg-black' />
						<button
							className='px-2'
							onClick={() => setShownProjects(shownProjects + 4)}
						>
							<div className='inline-block -rotate-90'>&lt;</div>{" "}
							Load More
						</button>
						<div className='flex-1 h-[1px] my-auto bg-black' />
					</div>
				)}
			</div>
		</>
	);
}
