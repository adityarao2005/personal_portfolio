import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import NavComponent from './components/NavComponent/NavComponent'
import HomePage from "./components/HomePage/HomePage"
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import AboutPage from './components/AboutPage/AboutPage'
import ArtPortfolioPage from './components/ArtPortfolioPage/ArtPortfolioPage'
import ContactMePage from './components/ContactMePage/ContactMePage'
import VisionPage from './components/VisionPage/VisionPage'

function App() {
	
	return (
		<>
			<div className="tablet:grid tablet:grid-cols-6 tablet:inset-0">
				<NavComponent />
				<div className="tablet:col-start-2 tablet:col-end-7">
					<HomePage />
					<ProjectsPage />
					<AboutPage />
					<VisionPage />
					<ArtPortfolioPage />
					<ContactMePage />
				</div>
			</div>
		</>
	)
}

export default App
