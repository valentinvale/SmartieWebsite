import React from "react";

import PartnerCard from "./PartnerCard";

import "../styles/Partners.css";

import ucv from "../resources/ucv.png";
import acceu from "../resources/acceu.png";
import bari from "../resources/bari.png";
import malaga from "../resources/malaga.png";
import zilina from "../resources/zilina.png";

const PartnersComponent = () => {
    return (
        <div className="partners-page">
            <div className="partners-page-description">
                <div className="description-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="text-div">
                        <h1 className="partners-title">Our Partners</h1>
                        <p className="partners-p">
                        SMARTIE collaborates with a diverse network of universities, 
                        research institutions, and industry leaders across Europe. 
                        Together, we are committed to advancing the responsible integration of AI in higher education by sharing expertise, 
                        fostering innovation, and building sustainable AI ecosystems. Our partners play a vital role in shaping the future of 
                        education in an AI-driven world.
                        </p>
                    </div>
                </div>
            </div>
            <div className="partner-cards">
                <PartnerCard
                    image={ucv}
                    title="University of Craiova"
                    description="The University of Craiova (Romanian: Universitatea din Craiova) is a public university 
                    located in Craiova, Romania. It was founded in 1947, initially with four institutes, 
                    in the Palace of Justice of Craiova. It is the largest university in the historical Oltenia province of Romania. 
                    It was the last university established in the Kingdom of Romania."
                />
                <PartnerCard
                    image={acceu}
                    title="ACCEU"
                    description="The Accreditation Council for Entrepreneurial and Engaged Universities (ACEEU) is the 
                    only globally-operating quality assurance body with a focus on acknowledging engagement and entrepreneurship
                     in Higher Education. ACEEU strives to lead the way in a new era for higher education."
                />
                <PartnerCard
                    image={bari}
                    title="Politecnico di Bari"
                    description="The Polytechnic University of Bari was established with Italian law “Legge n. 245” of 7 August 1990. 
                    It is the youngest among the Italian polytechnic universities. Even though other Italian universities 
                    also incorporate engineering and science faculties, Italian polytechnic universities are focused on 
                    technological faculties and subjects."
                />
                <PartnerCard
                    image={malaga}
                    title="University of Málaga"
                    description="The history of the University of Málaga begins in 1968 with the creation of the 
                    Association of Friends of the University of Málaga. This association sought the creation of the 
                    university because of the needs of the city. The University of Málaga was founded by decree of 18 August 1972 
                    by grouping existing centers in the late 1960s."
                />
                <PartnerCard
                    image={zilina}
                    title="University of Žilina"
                    description="The University of Žilina was established on 1 October 1953 as the College of Railways in Prague. 
                    In 1959, the institution changed its name to the University of Transport and moved to Žilina. 
                    As a result of the increasing role of communications within the curriculum of the university, 
                    the name changed to University of Transport and Communications."
                />
            </div>
        </div>
      
    );
}
export default PartnersComponent;