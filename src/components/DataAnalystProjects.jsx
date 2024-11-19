import React from "react";
import "../style.css";

import spotifyImage from "../Images/spotfy.jfif";
import londonHousingImage from "../Images/london-housing.jfif";
import salesImage from "../Images/sales.jfif";
import moviesImage from "../Images/movies.png";
import fifa20Image from "../Images/FIFA20.jfif";
import weatherImage from "../Images/weather.jfif";

const DataAnalystProjects = () => {
  const projects = [
    {
      title: "Spotify Analysis",
      image: spotifyImage,
      description: "This repository contains two data analysis projects using a Spotify dataset.",
      codeLink: "https://github.com/ksandile/Sportfy",
    },
    {
      title: "London Housing Analysis",
      image: londonHousingImage,
      description:
        "This project involves an analysis of the London Housing Dataset, which includes data on monthly average house prices, yearly number of houses sold, and monthly number of crimes committed.",
      codeLink: "https://github.com/ksandile/London-Housing",
    },
    {
      title: "Sales and Marketing",
      image: salesImage,
      description:
        "This project involves an analysis of a sales and marketing dataset to understand various aspects of sales performance, customer behavior, and product popularity.",
      codeLink: "https://github.com/ksandile/Sales-Analysis",
    },
    {
      title: "Movie Data Correlation",
      image: moviesImage,
      description:
        "This project focuses on analyzing correlations in a movie dataset, specifically investigating the relationships between budget, gross earnings, company, and other factors.",
      codeLink: "https://github.com/ksandile/Movie-Project",
    },
    {
      title: "FIFA20 Analysis",
      image: fifa20Image,
      description:
        "This analysis provides insights into player demographics, wages, and skill levels. We used bar plots to represent the data visually, and the findings are saved in the form of plots within this repository.",
      codeLink: "https://github.com/ksandile/Fifa20-Project",
    },
    {
      title: "Weather Analysis",
      image: weatherImage,
      description:
        "This project focuses on analyzing weather data to derive meaningful insights such as temperature trends, precipitation, humidity, and wind patterns.",
      codeLink: "https://github.com/ksandile/Weather-Project",
    },
  ];

  return (
    <section className="Projects" id="dataAnalystProjectsSection">
      <div className="myProjectHead">
        <h2>Data Analyst Projects</h2>
      </div>
      <div className="myProject">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="portfolio__img" />
            <p>{project.description}</p>
            <a href={project.codeLink} className="btn-work">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataAnalystProjects;
