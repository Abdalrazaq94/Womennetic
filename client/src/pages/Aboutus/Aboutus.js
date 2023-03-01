import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import HomeBody from "./HomeBody/HomeBody";
import MainAbout from "./MainAbout/MainAbout";
import Vision from "./Vision/Vision";
import Values from "./Values/Values";
import Footer from "../Home/Footer/Footer"

function About() {
	return (
		<>
			<Navbar />
			<HomeBody />
			<MainAbout />
			<Vision />
			<Values />
			<Footer />
		</>
	);
}

export default About;
