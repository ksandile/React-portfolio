import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MyServices from './components/MyServices';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import SoftwareDevProjects from "./components/SoftwareDevProjects";
import DataAnalystProjects from "./components/DataAnalystProjects";
import ContactMe from "./components/ContactMe";
import HtmlTech from "./components/techSkills/HTML";
import CssTech from "./components/techSkills/CSS";
// import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">My Services</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/softwareDevProjects" element={<SoftwareDevProjects />} />
          <Route path="/dataAnalystProjects" element={<DataAnalystProjects />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/HTML" element={<HtmlTech />} />
          <Route path="/CSS" element={<CssTech />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
