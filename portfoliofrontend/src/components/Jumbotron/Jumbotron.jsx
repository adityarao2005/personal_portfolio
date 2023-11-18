import React from 'react';

function Jumbotron(prop) {
	return (
		<section className="bg-center bg-gray-700 bg-blend-multiply">
			<div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				{prop.children }
			</div>
		</section>
	);
}

export default Jumbotron;