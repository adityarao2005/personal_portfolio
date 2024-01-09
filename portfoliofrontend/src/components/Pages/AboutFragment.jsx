import Header from "../Header/Header";

export default function AboutFragment() {
	return (
		<div className='w-screen h-fit flex-1'>
			<div className='grid md:h-full bg-black text-white p-20 grid grid-cols-2'>
				<div className='pr-4'>
					<h1
						className={
							"text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
						}
					>
						About Me
					</h1>
					<p className='pt-5 pb-20'>
						something about who you are where you are from, what you
						like to do why you do it etc something about who you are
						where you are from, what you like to do why you do it
						etc something about who you are where you are from, what
						you like to do why you do it etc something about who you
						are where you are from, what you like to do why you do
						it etc something about who you are where you are from,
						what you like to do why you do it etc something about
						who you are where you are from, what you like to do why
						you do it etc something about who you are where you are
						from, what you like to do why you do it etc something
						about who you are where you are from, what you like to
						do why you do it etc
					</p>

					<h1
						className={
							"text-white text-3xl md:text-2xl font-semibold font-['Poppins']"
						}
					>
						My expertises
					</h1>
					<p className='py-2'>
						what do you like to do what are you good at (write a
						small blurb here)
					</p>
					{/* Scrolling mini animation: Java, TailwindCSS, Figma, Python, Javascript, React, ... (many more) */}
					<div className="text-right font-['Poppins']  font-extrabold">
						<div className='text-zinc-900 text-9xl'>Java</div>
						<div className='text-neutral-800 text-8xl'>
							TailwindCSS
						</div>
						<div className='text-neutral-700 text-8xl'>Figma</div>
						<div className='text-neutral-600 text-9xl'>Python</div>
						<div className='text-zinc-800 text-8xl'>JavaScript</div>
						<div className='text-neutral-800 text-8xl'>React</div>
					</div>
				</div>
				<div className='pl-4'>
					<div className='bg-current h-96 rounded-3xl mb-4'></div>
					{/* Abilities and skills: Fullstack, Machine Learning, Web Design, Game Design, Backend Development, Frontend Development */}
					<div className="text-right font-['Poppins']  font-extrabold">
						<div className='text-zinc-700 text-8xl'>Full Stack</div>
						<div className='text-zinc-800 text-7xl'>
							Machine Learning
						</div>
						<div className='text-zinc-900 text-8xl'>Design</div>
					</div>

					<h1
						className={
							"pt-10 text-white text-3xl md:text-2xl font-semibold font-['Poppins']"
						}
					>
						Digital Toolbox
					</h1>
					<p className='py-2'>
						talk about your tech stack (write a small blurb here as
						well)
					</p>
				</div>
			</div>
		</div>
	);
}
