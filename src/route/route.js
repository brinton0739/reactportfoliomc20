import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate replace to="/about" />} />
        </Routes>
    )
}

export default MainRoute;