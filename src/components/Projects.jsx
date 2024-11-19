import React from 'react';
import "../style.css";

const Projects = () => {
  return (
    <section className="Projects" id="softwareDevProjectsSection">
      <div className="myProjectHead">
        <h2>Software Dev Projects</h2>
      </div>
      <div className="myProject">
        <div className="col">
          <h3>Cat Portfolio</h3>
          <a href="https://ksandile.github.io/Sandile-Kitayi-CodeSpace-Cat-Portfolio/HTML/"><img src="images/cat-codespace.png" alt="" className="portfolio__img" /></a>
          <p> I created a CodeSpace cat portfolio that showcases the skills of the cat...</p>
          <a href="https://github.com/ksandile/Sandile-Kitayi-CodeSpace-Cat-Portfolio/tree/main/HTML" className="btn-work">View Project</a>
        </div>
        {/* Add other project columns here */}
      </div>
    </section>
  );
};

export default Projects;
