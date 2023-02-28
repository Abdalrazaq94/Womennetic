import { Route, Routes } from "react-router-dom";

import Aboutus from "./pages/Aboutus/Aboutus";
import Home from "./pages/Home/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<Aboutus />} />
	</Routes>
);

export default App;
