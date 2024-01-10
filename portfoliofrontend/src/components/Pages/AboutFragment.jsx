import { useEffect, useState, useRef } from "react";

export function useIsVisible(ref) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting);
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}

function ObservableElement({ children }) {
	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<div
			ref={ref}
			className={`transition-opacity ease-in duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}

export default function AboutFragment() {
	return (
		<div className='w-screen h-fit flex-1'>
			<div className='grid md:h-full bg-black text-white p-20 grid grid-cols-2'>
				<div className='pr-4'>
					<ObservableElement>
						<h1
							className={
								"text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
							}
						>
							About Me
						</h1>
					</ObservableElement>
					<ObservableElement>
						<p className='pt-5 pb-20'>
							something about who you are where you are from, what
							you like to do why you do it etc something about who
							you are where you are from, what you like to do why
							you do it etc something about who you are where you
							are from, what you like to do why you do it etc
							something about who you are where you are from, what
							you like to do why you do it etc something about who
							you are where you are from, what you like to do why
							you do it etc something about who you are where you
							are from, what you like to do why you do it etc
							something about who you are where you are from, what
							you like to do why you do it etc something about who
							you are where you are from, what you like to do why
							you do it etc
						</p>
					</ObservableElement>

					<h1
						className={
							"text-white text-3xl md:text-2xl font-semibold font-['Poppins']"
						}
					>
						My expertises
					</h1>
					<p className='pt-2 pb-6'>
						what do you like to do what are you good at (write a
						small blurb here)
					</p>
					{/* Scrolling mini animation: Java, TailwindCSS, Figma, Python, Javascript, React, ... (many more) */}
					<div className="text-right font-['Poppins'] font-extrabold relative h-[780px]">
						<div className='animate-slideShow_0 absolute right-0'>
							Java
						</div>
						<div className='animate-slideShow_1 absolute right-0'>
							C#
						</div>
						<div className='animate-slideShow_2 absolute right-0'>
							SQL
						</div>
						<div className='animate-slideShow_3 absolute right-0'>
							Figma
						</div>
						<div className='animate-slideShow_4 absolute right-0'>
							Python
						</div>
						<div className='animate-slideShow_5 absolute right-0'>
							JavaScript
						</div>
						<div className='animate-slideShow_6 absolute right-0'>
							React
						</div>
						<div className='animate-slideShow_7 absolute right-0'>
							C/C++
						</div>
					</div>
				</div>
				<div className='pl-4'>
					<ObservableElement>
						<div className='bg-current h-96 rounded-3xl mb-4'></div>
					</ObservableElement>
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
