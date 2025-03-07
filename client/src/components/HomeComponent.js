import React from "react";

import blobs from "../resources/blobs.png";

const HomeComponent = () => {
    return (
        <div className="homa-page-content">
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "852px", height: "442px"}}>
                    <h1>SMARTIE</h1>
                    <h4>Synergistic Management and Advancement of Artificial Intelligence in European Higher Education</h4>
                    <p style={{fontSize: "24px"}}>
                        SMARTIE is a collaborative initiative designed to enhance the integration, development, 
                        and responsible use of Artificial Intelligence (AI) within European higher education institutions. 
                        By fostering innovation and strategic AI deployment, SMARTIE aims to equip universities, educators, 
                        and students with the tools, knowledge, and infrastructure necessary to thrive in an increasingly AI-driven world.
                    </p>
                </div>
                {/* <div>
                    <img 
                        src={blobs} 
                        alt="blobs" 
                        style={{width: "972.41px", height: "818px"}}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default HomeComponent;