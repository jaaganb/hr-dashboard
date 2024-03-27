import React, { useState } from "react";
import "./Jobs.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";

import json from "../json/jobs.json";
import arrow from "../assets/arrow.png";
import filter from "../assets/filter.png";
import python from "../assets/python.png";
import angular from "../assets/angular.png";
import java from "../assets/java.png";
import ui from "../assets/ui.png";

const JobCard = ({ job }) => {
  let img_src = [python, angular, java, ui];
  return (
    <div className="job-card">
      <div className="job-header">
        <span
          className={`job-icon ${job.title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <img src={img_src[job.id - 1]} alt={job.title} className="job-icon" />
        </span>
        <span>{job.title}</span>
        <span className="job-menu">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="job-body">
        <p>{job.description}</p>
        <div className="job-applications">
          <div
            className="applications-count"
            style={{ backgroundColor: job.bg, color: job.color }}
          >
            {job.applications}
          </div>
          <span className="applications-label">Total Applicants</span>
        </div>
        <div className="job-footer">
          <span className="growth">
            <img src={arrow} alt="Growth" />
            {job.growth} last month
          </span>
          <span className="timestamp">{job.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [jobs] = useState(json);
  const [searchTxt, SetSearchTxt] = useState("");

  return (
    <div className="jobs-block mt-5">
      <Container fluid>
        <Row>
          <Col xs={3} md={2} className="mt-4">
            <h4 className=" ps-3">Posted Jobs</h4>
          </Col>
          <Col xs={3} md={4} className="mt-4">
            <a href="#">View All</a>
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
      </Container>
      <div className="jobs-container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
