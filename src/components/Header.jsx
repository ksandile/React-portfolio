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
            <i class="fa-solid fa-house"></i>Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={toggleMenu}>
            <i class="fa-solid fa-address-card"></i>About Me
            </Link>
          </li>
          <li>
            <Link to="services" onClick={toggleMenu}>
            <i class="fa-brands fa-servicestack"></i>My Services
            </Link>
          </li>

          {/* Dropdown menu for Projects */}
          <li className="dropdown">
            <Link to="/" className="dropbtn" onClick={toggleMenu}>
            <i class="fa-solid fa-diagram-project"></i>Projects
            </Link>
            <div className="dropdown-content">
              <Link to="/softwareDevProjects">Software Dev Projects</Link>
              <Link to="/dataAnalystProjects">Data Analyst Projects</Link>
            </div>
          </li>

          {/* Dropdown menu for Tech Skills */}
          <li className="dropdown">
            <Link to="/" className="dropbtn" onClick={toggleMenu}>
            <i class="fa-solid fa-microchip"></i>Tech Skills
            </Link>
            <div className="dropdown-content">
              <Link to="Html">HTML</Link>
              <Link to="Css">CSS</Link>
              <Link to="Javascript">JavaScript</Link>
              <Link to="ReactSkill">React.Js</Link>
              <Link to="Node">Node.Js</Link>
              <Link to="Python">Python</Link>
              <Link to="Java">Java</Link>
              <Link to="SQL">SQL</Link>
            </div>
          </li>

          {/* Contact Link */}
          <li>
            <Link to="contactMe" onClick={toggleMenu}>
            <i class="fa-solid fa-address-book"></i>Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
