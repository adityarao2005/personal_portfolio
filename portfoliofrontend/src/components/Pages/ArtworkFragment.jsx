import React from "react";
import portrait from "../../assets/images/portrait.jpg";
import landscape from "../../assets/images/landscape.jpg";

class Artwork {
	constructor(name, image, completionDate, type, description) {
		this.name = name;
		this.image = image;
		this.completionDate = completionDate;
		this.type = type;
		this.description = description;
	}
}

function ArtCard(props) {
	return (
		<div className='p-2 rounded bg-white m-2'>
			<div className='flex flex-col'>
				<img
					src={props.image}
					className='h-96 object-contain object-center'
				/>
				{props.name && <div>Name: {props.name}</div>}
				{props.completionDate && <div>Date Completed: {props.completionDate}</div>}
				{props.type && <div>Type: {props.type}</div>}
				{props.description && (
					<div>Description: {props.description}</div>
				)}
			</div>
		</div>
	);
}

export default function ArtworkFragment() {
	return (
		<div
			id='artwork'
			className='w-screen h-fit flex-1 bg-black p-10 relative'
		>
			<div className='my-10'>
				<h1
					className={
						"text-center mx-auto text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
					}
				>
					Artwork
				</h1>

				<div className='p-2 mt-4 flex flex-row flex-wrap'>
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
					<ArtCard
						image={portrait}
						description='asdfasdf'
						name='adsf'
						completionDate='12/01/2024'
						type='Scenery'
					/>
					<ArtCard image={landscape} />
				</div>
			</div>
		</div>
	);
}
