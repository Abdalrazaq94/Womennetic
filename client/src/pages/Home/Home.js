import React from "react";

import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Homepages from "./HomePages/HomePages";
import Footer from "./Footer/Footer";
export function Home() {
	return (
		<main role="main">
			<Navbar />
			<Homepages />
			<Footer />
		</main>
	);
}

export default Home;
