import "./App.css";
import AssessmentCard from "./components/AssessmentCard";
import Description from "./components/Description";

import ApplicationsInfoChart from "./components/ApplicationsInfoChart";
import { Container, Row, Col } from "react-bootstrap";
import Jobs from "./components/Jobs";
import Candidates from "./components/Candidates";

function App() {
  return (
    <>
      <Description />
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <ApplicationsInfoChart />
          </Col>
          <Col xs={12} md={4}>
            <AssessmentCard />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Jobs />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Candidates />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
