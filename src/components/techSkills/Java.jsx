import React, { useState } from "react";
import '../../style.css';

const JavaTech = () => {
    // State to track whether the section is open or closed
    const [isOpen, setIsOpen] = useState(true);

    // Toggle the section visibility
  const closeSection = () => {
    setIsOpen(false);
  };
    return (
        isOpen && (
        <section className="Java" id="java">
            <div className="Java-container">
                <div className="java-header">
                    <p>Java</p>
                </div>
                <button className="close-javabtn" id="closejava" onClick={closeSection}>✖️</button>
                <div className="java-content">
                    <p>
                        During my journey learning Java, I’ve gained a comprehensive understanding of object-oriented programming (OOP) principles and design patterns. 
                        I have worked on building scalable, efficient applications using Java, focusing on backend development.
                    </p>
                    <p>
                        I am familiar with core concepts such as multi-threading, exception handling, and have worked with popular Java frameworks like Spring Boot to create RESTful APIs and manage databases.
                    </p>
                    <p>
                        Here is a project I built using Java, showcasing my skills: 
                        <a href="https://example.com/your-java-project" target="_blank" rel="noopener noreferrer">View my Java project</a>.
                    </p>
                </div>
            </div>
        </section>
        )
    );
};

export default JavaTech;
