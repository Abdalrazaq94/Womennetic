import { Route, Routes } from "react-router-dom";

import About from "./pages/Aboutus/Aboutus";
import Home from "./pages/Home/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/About" element={<About />} />
	</Routes>
);

export default App;
