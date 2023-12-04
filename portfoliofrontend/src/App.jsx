import React from "react";
import ComponentTester from "./components/ComponentTester/ComponentTester";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route
							path='/components'
							element={<ComponentTester />}
						/>
						<Route path='/' index element={<HomePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
