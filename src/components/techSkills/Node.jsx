import React, { useState } from "react";

const NodeTech = () => {
    // State to track whether the section is open or closed
    const [isOpen, setIsOpen] = useState(true);
    // Toggle the section visibility
    const closeSection = () => {
        setIsOpen(false);
    };
    return (
        isOpen && (
        <section className="Node" id="node">
            <div className="Node-container">
                <div className="node-header">
                    <p>Node.js</p>
                </div>
                <button className="close-nodebtn" id="closenode" onClick={closeSection}>✖️</button>
                <div className="node-content">
                    <p>
                        During my journey learning Node.js, I have gained a solid understanding of how to use Node.js for server-side development. 
                        I have learned how to create RESTful APIs, manage databases, and handle asynchronous operations to build scalable applications.
                    </p>
                    <p>
                        I am familiar with key concepts such as middleware, routing, and have used Node.js frameworks like Express.js to streamline development processes.
                    </p>
                    <p>
                        Here is a project I built using Node.js, showcasing my skills: 
                        <a href="https://github.com/ksandile/Rest-API" target="_blank" rel="noopener noreferrer">View my Node.js project</a>.
                    </p>
                </div>
            </div>
        </section>
        )
    );
};

export default NodeTech;
