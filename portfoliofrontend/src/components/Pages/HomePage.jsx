import React, { useState, useEffect } from "react";

import HomeFragment from "./HomeFragment";
import AboutFragment from "./AboutFragment";
import ProjectFragment from "./ProjectFragment";

function HomePage() {
	return (
		<div>
			<HomeFragment />
			<AboutFragment />
			<ProjectFragment />
		</div>
	);
}

export default HomePage;
