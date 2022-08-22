import React from 'react'
import './styles/App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Posts from './pages/Posts'
import About from './pages/About'
import Navbar from "./components/UI/Navbar/Navbar";



function App() {
	return  (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/posts" element={<Posts />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>


	)
}

export default App;
