import React from "react";

const SQLTech = () => {
    return (
        <section className="SQL" id="sql">
            <div className="SQL-container">
                <div className="sql-header">
                    <p>SQL</p>
                </div>
                <button className="close-sqlbtn" id="closesql">✖️</button>
                <div className="sql-content">
                    <p>
                        Throughout my journey learning SQL, I have developed a strong foundation in managing and querying databases. 
                        I am proficient in writing complex queries to retrieve, manipulate, and analyze data from relational databases.
                    </p>
                    <p>
                        I have hands-on experience with key SQL concepts such as joins, indexing, stored procedures, and database optimization to ensure efficient data management.
                    </p>
                    <p>
                        Here is a project I built using SQL, demonstrating my ability to work with databases:
                        <a href="https://example.com/your-sql-project" target="_blank" rel="noopener noreferrer">View my SQL project</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SQLTech;
