import { Route, Routes } from "react-router-dom";

import About from "./pages/Aboutus/Aboutus";
import Home from "./pages/Home/Home";
import CodeOfConduct from "./pages/Conduct/Conduct";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/About" element={<About />} />
		<Route path="/code-of-conduct" element={<CodeOfConduct />} />
	</Routes>
);

export default App;
