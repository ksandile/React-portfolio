import React from 'react';
import "../style.css";
import atSpaceImg from "../Images/AtSpace.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section__title section__title--about">
        <strong>Who I am</strong>
      </h2>
      <p className="subtitle">Data Analyst & FullStack Developer based out of SA✨</p>
      <div className="about-me__body">
        <div className="about-me__content">
          <div className="about-me__text">
            <p>
              I am a process-oriented data analyst with three years of
              experience in interpreting and analyzing data to drive key
              business decisions. I began my career as an Assistant Data
              Analyst at Unilever, where I developed a passion for informed
              decision-making and facilitating long-term growth. In this role,
              I was responsible for data collection, cleaning, preprocessing,
              and conducting exploratory data analysis and statistical
              analysis. My education and experience have equipped me with the
              ability to grasp new ideas and develop innovative solutions to
              problems, ultimately supporting clients in making impactful
              finance and strategy decisions.
            </p>
            <br />
            <p>
              With a desire to explore the tech industry further, I attended
              CodeSpace Academy, where I completed a six-month Software
              Development course. After successfully passing the program, I
              obtained my certification and secured a Software Internship at
              CapaCiti, where I am currently enhancing my technical skills and
              applying my knowledge in a practical setting. Throughout my
              career, I have demonstrated my commitment to continuous learning
              and professional growth, striving to leverage data-driven
              insights to create value in various industries.
            </p>
          </div>
        </div>
        <div className="about-me__image">
          <img
            src={atSpaceImg}
            className="about-me__img"
            alt="codespace cat"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
