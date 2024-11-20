import React from "react";

const ReactTech = () => {
    return (
        <section className="React" id="react">
            <div className="React-container">
                <div className="react-header">
                    <p>React</p>
                </div>
                <button className="close-reactbtn" id="closereact">✖️</button>
                <div className="react-content">
                    <p>
                        During my journey learning React, I have gained a solid understanding of building dynamic user interfaces with React components. 
                        I have learned how to manage state and props, implement hooks, and create reusable components to enhance application performance and maintainability.
                    </p>
                    <p>
                        I am familiar with key concepts such as routing with React Router, state management using Context API and Redux, and have built several applications using React.js.
                    </p>
                    <p>
                        Here is a project I built using React, showcasing my skills: 
                        <a href="https://example.com/your-react-project" target="_blank" rel="noopener noreferrer">View my React project</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReactTech;
