import React from "react";

import "../styles/Objectives.css";

const ObjectivesComponent = () => {
    return (
        <div className="objectives-page">
            <div className="objectives-page-description">
                <div className="description-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="text-div">
                        <h1 className="objectives-title">Objectives</h1>
                        <p className="objectives-p">
                        SMARTIE aims to empower higher education institutions across Europe to responsibly 
                        integrate artificial intelligence into teaching, learning, and governance. 
                        Our objectives focus on developing practical frameworks, enhancing digital and AI literacy, 
                        promoting ethical AI use, and supporting institutional transformation. 
                        By aligning innovation with inclusion and sustainability, 
                        we strive to ensure that AI serves as a tool for positive change in education.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
      
    );
}
export default ObjectivesComponent;