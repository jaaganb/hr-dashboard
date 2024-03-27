import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Description = () => {
  return (
    <Container fluid className="mt-2">
      <Row>
        <Col xs={12} md={10}>
          <h3>HR Employee</h3>
          <div>
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </div>
        </Col>
        <Col xs={4} md={2}>
          <Button variant="primary" className="mt-3 rounded-0">
            Task Details
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
