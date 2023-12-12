import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Blog from "./Components/Blog";
import About from "./Components/About";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/blog" element={< Blog />} />
        <Route path="about" element={< About />} />
      </Routes>
    </Router>
  );
}

export default App;
