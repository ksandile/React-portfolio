import React, { useState } from 'react';

const JavaScript = () => {
  // State to track whether the section is open or closed
  const [isOpen, setIsOpen] = useState(true);
  // Toggle the section visibility
  const closeSection = () => {
    setIsOpen(false);
  };
  return (
    isOpen && (
    <section className="JavaScript" id="javascript">
      <div className="JavaScript-container">
        <div className="js-header">
          <p>JavaScript</p>
        </div>
        <button className="close-jsbtn" id="closejs" onClick={closeSection}>✖️</button>
        <div className="js-content">
          <p>
            During my journey learning JavaScript, I have gained a solid understanding of how to use JavaScript for web development...
          </p>
          <p>
            Here is a project I built using JavaScript: 
            <a href="https://example.com/your-javascript-project" target="_blank" rel="noopener noreferrer">
              View my JavaScript project
            </a>.
          </p>
        </div>
      </div>
    </section>
    )
  );
};

export default JavaScript;
