import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router for routing
import "../style.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        SK Dev / <span>Designer</span>
      </Link>

      {/* Menu Icon for mobile view */}
      <i
        className={`fa-solid fa-house ${isMobile ? "active" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      {/* Navigation Bar */}
      <nav className={`navbar ${isMobile ? "active" : ""}`}>
        <ul>
          {/* Navigation links */}
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="services" onClick={toggleMenu}>
              My Services
            </Link>
          </li>

          {/* Dropdown menu for Projects */}
          <li className="dropdown">
            <Link to="myProjects" className="dropbtn" onClick={toggleMenu}>
              Projects
            </Link>
            <div className="dropdown-content">
              <Link to="/softwareDevProjects">Software Dev Projects</Link>
              <Link to="/dataAnalystProjects">Data Analyst Projects</Link>
            </div>
          </li>

          {/* Dropdown menu for Tech Skills */}
          <li className="dropdown">
            <Link to="#techSkills" className="dropbtn" onClick={toggleMenu}>
              Tech Skills
            </Link>
            <div className="dropdown-content">
              <Link to="#html">HTML</Link>
              <Link to="#css">CSS</Link>
              <Link to="#javascript">JavaScript</Link>
              <Link to="#react">React.Js</Link>
              <Link to="#node">Node.Js</Link>
              <Link to="#python">Python</Link>
              <Link to="#java">Java</Link>
              <Link to="#sql">SQL</Link>
            </div>
          </li>

          {/* Contact Link */}
          <li>
            <Link to="contactMe" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
