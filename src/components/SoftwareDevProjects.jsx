import React from "react";
import "../style.css";

import bankSystem from "../Images/bank.png";
import onlineStore from "../Images/onlinestore.png";
import blackJack from "../Images/blackjack.jpeg";
import addToCart from "../Images/AddToCart.jpeg";
import footerImage from "../Images/cache.png";
import careOnCall from "../Images/careoncall.png";

const SoftwareDevProjects = () => {
  const projects = [
    {
      title: "Bank System",
      image: bankSystem,
      description:
        "JavaFX-based application that allows an administrator to manage clients and clients to perform banking transactions.",
      // liveLink: "https://ksandile.github.io/Sandile-Kitayi-CodeSpace-Cat-Portfolio/HTML/",
      codeLink: "https://github.com/ksandile/bankjava",
    },
    {
      title: "Online Store",
      image: onlineStore,
      description:
        "I created a Food application using HTML, CSS, and JavaScript. This is my long term goal application.",
      liveLink: "https://ksandile.github.io/My-Online-Store/",
      codeLink: "https://github.com/ksandile/My-Online-Store",
    },
    {
      title: "Black Jack Game",
      image: blackJack,
      description:
        "In this project I created a Black Jack game, where the user will play against the machine.",
      liveLink: "https://ksandile.github.io/BlackJackGame2/",
      codeLink: "https://github.com/ksandile/BlackJackGame2",
    },
    {
      title: "Add To Cart",
      image: addToCart,
      description: "I created an Add to cart application.",
      liveLink: "https://ksandile.github.io/Add-To-Cart/",
      codeLink: "https://github.com/ksandile/Add-To-Cart",
    },
    {
      title: "CareOnCall",
      image: careOnCall,
      description: "Sort of Uber app, but you will request Car Wash, Garden Maintanance, House Keeping, and Laundry.",
      liveLink: "https://alle-services2.netlify.app/",
      codeLink: "https://github.com/ksandile/passengers-app",
    },
    {
      title: "Footer",
      image: footerImage,
      description: "Created a footer using HTML, CSS, and JavaScript.",
      liveLink: "https://ksandile.github.io/SANKIT341_WFC2401_GroupA_SandileKitayi_SDF09/",
      codeLink: "https://github.com/ksandile/Footer",
    },
  ];

  return (
    <section className="Projects" id="softwareDevProjectsSection">
      <div className="myProjectHead">
        <h2>Software Dev Projects</h2>
      </div>
      <div className="myProject">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <h3>{project.title}</h3>
            <a href={project.liveLink} className="portfolio__item">
              <img src={project.image} alt={project.title} className="portfolio__img" />
            </a>
            <p>
              {project.description}
              <br />
              To See Code, Click "View Project".
              <br />
              To Visit Website, Click "The image".
            </p>
            <a href={project.codeLink} className="btn-work">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareDevProjects;
