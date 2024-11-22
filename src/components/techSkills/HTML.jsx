import React, { useState } from 'react';
import '../../style.css';

const HTML = () => {
  // State to track whether the section is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Toggle the section visibility
  const closeSection = () => {
    setIsOpen(false);
  };

  return (
    // Only render the section if isOpen is true
    isOpen && (
      <section className="HTML" id="html">
        <div className="HTML-container">
          <div className="html-header">
            <p>HTML</p>
          </div>
          <button className="close-htmlbtn" id="closeHtml" onClick={closeSection}>
            ✖️
          </button>
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
    )
  );
};

export default HTML;
