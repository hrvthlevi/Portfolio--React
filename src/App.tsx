import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Java from "./pages/Java/Java";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/java" element={<Java />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
