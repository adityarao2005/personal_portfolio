import React, { useState, useEffect } from "react";

import HomeFragment from "./HomeFragment";
import AboutFragment from "./AboutFragment";
import ProjectFragment from "./ProjectFragment";
import ArtworkFragment from "./ArtworkFragment";
import ContactMeFragment from "./ContactMeFragment";

function HomePage() {
	return (
		<div>
			<HomeFragment />
			<AboutFragment />
			<ProjectFragment />
			<ArtworkFragment />
			<ContactMeFragment />
		</div>
	);
}

export default HomePage;
