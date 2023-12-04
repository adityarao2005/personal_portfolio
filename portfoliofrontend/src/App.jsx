import React from "react";
import ComponentTester from "./components/ComponentTester/ComponentTester";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/components' element={<ComponentTester />} />
					<Route path='/' element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
