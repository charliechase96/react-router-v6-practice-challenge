import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";

function Navbar() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default Navbar;