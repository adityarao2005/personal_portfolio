import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';

function ArtPortfolioPage() {

	return (
		<div>
			<Jumbotron>
				<h1 id="art-portfolio" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Art Portfolio</h1>
			</Jumbotron>

			<div className="my-4 px-4 grid grid-cols-1 phone:grid-cols-2 gap-4">
				{
					// card image
					// click on it and you get popup modal to view it
				}
			</div>
		</div>

	);
}



export default ArtPortfolioPage;