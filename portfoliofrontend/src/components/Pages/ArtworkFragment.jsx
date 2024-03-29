import React, { useState } from "react";
import portrait from "../../assets/images/portrait.jpg";
import landscape from "../../assets/images/landscape.jpg";
import Modal from "../Modal/Modal";

class Artwork {
	constructor(
		image,
		name,
		completionDate,
		type,
		description,
		orientation = "landscape"
	) {
		this.name = name;
		this.image = image;
		this.completionDate = completionDate;
		this.type = type;
		this.description = description;
		this.orientation = orientation;
	}
}

const artworks = [
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
	new Artwork(
		portrait,
		"adsf",
		"12/01/2024",
		"Scenery",
		"asdfasdf",
		"portrait"
	),
	new Artwork(landscape),
];

function ArtCard(props) {
	return (
		<div
			className={
				"p-2 rounded bg-white m-2 hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 duration-200 " +
				(props.visible ? "block" : "hidden")
			}
			onClick={props.onClick}
		>
			<div className='flex flex-col'>
				<img
					src={props.art.image}
					className='h-96 object-contain object-center'
				/>
				{props.art.name && <div>Name: {props.art.name}</div>}
				{props.art.completionDate && (
					<div>Date Completed: {props.art.completionDate}</div>
				)}
				{props.art.type && <div>Type: {props.art.type}</div>}
				{props.art.description && (
					<div>Description: {props.art.description}</div>
				)}
			</div>
		</div>
	);
}

function ArtworkViewModel(props) {
	return (
		<Modal
			visible={props.visible}
			toggleVisibility={props.toggleVisibility}
		>
			{props.artwork && (
				<div
					className={
						"flex h-full " +
						(props.artwork.orientation == "landscape"
							? "flex-col"
							: "flex-row")
					}
				>
					<div className='w-32 flex flex-col'>
						{props.artwork.name && (
							<div>Name: {props.artwork.name}</div>
						)}
						{props.artwork.completionDate && (
							<div>
								Date Completed: {props.artwork.completionDate}
							</div>
						)}
						{props.artwork.type && (
							<div>Type: {props.artwork.type}</div>
						)}
						{props.artwork.description && (
							<div>Description: {props.artwork.description}</div>
						)}
					</div>
					<div className='flex-1 relative'>
						<img
							src={props.artwork.image}
							className='w-10/12 object-center object-contain mx-auto drop-shadow-2xl border-t-2 shadow-xl border-t-slate-100'
						/>
					</div>
				</div>
			)}
		</Modal>
	);
}

export default function ArtworkFragment() {
	// Main fragment for the projects page
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedArt, setSelectedArt] = useState(null);
	const [shownArt, setShownArt] = useState(6);

	const toggleVisibility = (art) => {
		setModalVisible(!modalVisible);
		setSelectedArt(art);
	};

	return (
		<div
			id='artwork'
			className='w-screen h-fit flex-1 bg-black p-10 relative'
		>
			<ArtworkViewModel
				visible={modalVisible}
				toggleVisibility={() => toggleVisibility(null)}
				artwork={selectedArt}
			/>
			<div className='my-10'>
				<h1
					className={
						"text-center mx-auto text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
					}
				>
					Artwork
				</h1>

				<div className='p-2 mt-4 flex flex-row flex-wrap justify-center'>
					{artworks.map((art, index) => (
						<ArtCard
							art={art}
							key={index}
							visible={index < shownArt}
							onClick={() => toggleVisibility(art)}
						></ArtCard>
					))}
				</div>

				{shownArt < artworks.length && (
					<div className='p-5 flex flex-row'>
						<div className='flex-1 h-[1px] my-auto bg-white' />
						<button
							className='px-2 text-white'
							onClick={() => setShownArt(shownArt + 6)}
						>
							<div className='inline-block -rotate-90'>&lt;</div>{" "}
							Load More
						</button>
						<div className='flex-1 h-[1px] my-auto bg-white' />
					</div>
				)}
			</div>
		</div>
	);
}
