import React, { useState } from "react";
import candidateData from "../json/candidates.json";
import "./Candidates.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import filter from "../assets/filter.png";
import action from "../assets/action.png";

const Candidates = () => {
  const [searchTxt, SetSearchTxt] = useState("");
  return (
    <div className="jobs-block mt-5">
      <Container fluid>
        <Row>
          <Col xs={3} md={2} className="mt-4">
            <h4 className=" ps-3">Posted Jobs</h4>
          </Col>
          <Col xs={3} md={4} className="mt-4">
            <a href="/">View All</a>
          </Col>
          <Col xs={3} md={4} className="mt-4">
            <Form className="d-flex ps-rel  ms-5 ">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 search-shadow posted-search"
                aria-label="Search"
                onChange={(e) => SetSearchTxt(e.target.value)}
              />
              {searchTxt ? "" : <BsSearch className="header-search" />}
            </Form>
          </Col>
          <Col xs={3} md={2}>
            <Button
              variant="outline-light"
              className="mt-4 rounded-0 filter-btn ms-5"
            >
              <img src={filter} alt="Filters" />
              Filters
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mt-3">
            <table>
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>1st Level</th>
                  <th>2nd Level</th>
                  <th>3rd Level</th>
                  <th>4th Level</th>
                  <th>Total Marks</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidateData.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.jobId}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.position}</td>
                    <td>{candidate.firstLevel}</td>
                    <td>{candidate.secondLevel}</td>
                    <td>{candidate.thirdLevel}</td>
                    <td>{candidate.fourthLevel}</td>
                    <td>{candidate.totalMarks}</td>
                    <td>
                      <span
                        style={{
                          backgroundColor:
                            candidate.status === "Active"
                              ? "#FFF9EC"
                              : candidate.status === "Hired"
                              ? "#0EAD0B26"
                              : candidate.status === "Reject"
                              ? "#E73B3B26"
                              : "black",
                          padding: "0 15px",
                        }}
                      >
                        {candidate.status}
                      </span>
                    </td>
                    <td>
                      <img src={action} alt="action" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Candidates;
