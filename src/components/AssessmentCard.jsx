import React from "react";
import { Button, Row } from "react-bootstrap";
import icon from "../assets/assess-icon.png";
import character from "../assets/character.png";

const AssessmentCard = () => {
  return (
    <div className="assessment-card col-md-12 col-sm-12">
      <div className="assessment-icon">
        <img src={icon} alt="Notes" />
      </div>
      <Row>
        <div className="assessment-header mt-2 col-md-6">
          <h3>0033</h3>
          <p className="mt-2">New Assessment's</p>
        </div>
        <Button variant="light" className=" rounded-0 col-md-4 details-button">
          VIEW DETAILS
        </Button>
      </Row>

      <div className="assessment-figures col-md-7">
        <img className="char1" src={character} alt="Character 1" />
        <img className="char2" src={character} alt="Character 2" />
      </div>
    </div>
  );
};

export default AssessmentCard;
