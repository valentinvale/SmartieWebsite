import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

import "../styles/NewPartnerCard.css";

const NewPartnerCard = ({partnerImage, partnerName, partnerFlag, email, phone, contactPerson, description}) => {
    return (
        <div className="new-partner-card">
            <div className="new-partner-circle-image-wrapper">
                <div className="new-partner-circle-image-container">
                    <img src={image} alt={title} className="new-partner-circle-image" />
                </div>
            </div>
            <Card className="new-partner-card-body">
                <CardBody>
                    <div className="new-partner-name-and-flag-container">
                        <CardText className="new-partner-name">{partnerName}</CardText>
                        <CardText className="new-partner-flag">{partnerFlag}</CardText>
                    </div>
                    <div className="new-partner-phone-container">
                        <CardText className="new-partner-phone">{phone}</CardText>
                    </div>
                    <div className="new-partner-email-container">
                        <CardText className="new-partner-email">{email}</CardText>
                        <a>Learn More</a>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
export default NewPartnerCard;