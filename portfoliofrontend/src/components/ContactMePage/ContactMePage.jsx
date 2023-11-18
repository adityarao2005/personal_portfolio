import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';

function ContactMePage() {

	return (
		<div>
			<Jumbotron>
				<h1 id="contact-me" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white tablet:text-5xl lg:text-6xl">Contact Me Via:</h1>
			</Jumbotron>

			<div>
				<h1>Email: adityarao2005@gmail.com</h1>
				<h1>School Email: raoa32@mcmaster.ca</h1>
				<h1>Phone: 647-978-3730</h1>
				<h1>Discord: _epicbird</h1>
				<h1>Instagram: epicbird4410</h1>
				<h1>Or leave me a message:</h1>

				<div className="rounded-t-lg overflow-hidden flex justify-center p-8">
					<form className="w-full max-w-lg">
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full tablet:w-1/2 px-3 mb-6 tablet:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-full-name">
									Full Name
								</label>
								<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-full-name" type="text" placeholder="Jane Doe" />
								<p className="text-red-500 text-xs italic">Please fill out this field.</p>
							</div>
							<div className="w-full tablet:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
									Email
								</label>
								<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane.doe@gmail.com" />
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
									Message
								</label>
								<textarea className="resize-none hover:resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Enter your message here" />
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full tablet:w-1/3 px-3 mb-6 tablet:mb-0">
							</div>
							<div className="w-full tablet:w-1/3 px-3 mb-6 tablet:mb-0">
								
							</div>
							<div className="w-full tablet:w-1/3 px-3 mb-6 tablet:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-submit">
									Submit
								</label>
								{
									// Change design for this
								}
								<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-submit" type="submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

	);
}

export default ContactMePage;