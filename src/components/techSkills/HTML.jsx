import React from 'react';
import './techSkills.css'; // Import shared styles

const HTML = () => {
  return (
    <section className="HTML" id="html">
      <div className="HTML-container">
        <div className="html-header">
          <p>HTML</p>
        </div>
        <button className="close-htmlbtn" id="closeHtml">✖️</button>
        <div className="html-content">
          <p>
            Throughout my journey learning HTML, I have gained an understanding of the structure of web pages, how to properly use tags such as 
            <code>&lt;div&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and more. I also learned how to create tables, forms, 
            and include multimedia elements like images and videos.
          </p>
          <p>
            Here is a project I built using HTML, showcasing my skills: 
            <a href="https://ksandile.github.io/Sandile-Kitayi-CodeSpace-Cat-Portfolio/HTML/" target="_blank" rel="noopener noreferrer">
              View my HTML project
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HTML;
