import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import sandImage from "../Images/sand.jpg";
// Import the images
import htmlImg from "../Images/html.png";
import cssImg from "../Images/css.png";
import jsImg from "../Images/javascript.png";
import reactImg from "../Images/react.png";
import pythonImg from "../Images/python.jpeg";
import sqlImg from "../Images/sql.png";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const goToContact = () => {
    navigate("/contactMe"); // Navigate to the ContactMe page
  };

  return (
    <section className="Home">
      <div className="home">
        <div className="home-img">
          <img src={sandImage} alt="my profile" />
        </div>
        <div className="home-content">
          <h1>
            I am <span>Sandile Kitayi</span>
          </h1>
          <h3 className="text-animation">
            A <span></span>
          </h3>
          <p>
            Welcome to my portfolio! I am a passionate software developer eager
            to bring your ideas to life. Take a look around and let us create
            something amazing together!
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sandile-kitayi-6aa393275/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ksandile">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.tiktok.com/@sandilethesoftwaredev1?is_from_webapp=1&sender_device=pc">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/kitayi.skhanda">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <button onClick={goToContact} className="btn1" id="hireMeBtn">
            Hire Me
          </button>
          <a
            href="https://docs.google.com/document/d/1Vmky7eL4UUL8e8Mj68rvtwYHvr5eMIjbOkmjq0v0KBg/edit"
            className="btn2"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
