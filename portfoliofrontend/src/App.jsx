import React from "react";
import ComponentTester from "./components/ComponentTester/ComponentTester";
import HomePage from "./components/Pages/HomePage";
import Page404 from "./components/Pages/Page404";
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
						<Route path='*' index element={<Page404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
