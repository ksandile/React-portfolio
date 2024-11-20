import React, { useState } from 'react';
import '../../style.css';

const CSS = () => {
  // State to track whether the section is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Toggle the section visibility
  const closeSection = () => {
    setIsOpen(false);
  };
  return (
    isOpen && (
    <section className="CSS" id="css">
      <div className="CSS-container">
        <div className="css-header">
          <p>CSS</p>
        </div>
        <button className="close-cssbtn" id="closecss" onClick={closeSection}>✖️</button>
        <div className="css-content">
          <p>
            Throughout my journey learning CSS, I have gained an understanding of how to style web pages effectively...
          </p>
          <p>
            Here is a project I built using CSS: 
            <a href="https://ksandile.github.io/Animating-Weppage/" target="_blank" rel="noopener noreferrer">
              View my CSS project
            </a>.
          </p>
        </div>
      </div>
    </section>
    )
  );
};

export default CSS;
