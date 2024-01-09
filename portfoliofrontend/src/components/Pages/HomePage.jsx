import React, { useState, useEffect } from "react";

import HomeFragment from "./HomeFragment";
import AboutFragment from "./AboutFragment";

function HomePage() {
	return (
		<div>
			<HomeFragment />
			<AboutFragment />
		</div>
	);
}

export default HomePage;
