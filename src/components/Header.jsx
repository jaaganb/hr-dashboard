import React, { useState } from "react";

import logo from "../assets/logo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import profile from "../assets/profile.png";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [searchTxt, SetSearchTxt] = useState("");
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <img src={logo} alt="talent acquisition" title="talent acquisition" />
          <Form className="d-flex ps-rel col-md-3 col-sm-2 ms-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search-shadow"
              aria-label="Search"
              onChange={(e) => SetSearchTxt(e.target.value)}
            />
            {searchTxt ? "" : <BsSearch className="header-search" />}
          </Form>
          <Nav className="ms-auto  col-md-4 col-sm-3 justify-content-between">
            <Nav.Link href="#">
              <img src={icon1} alt="icon1" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={icon2} alt="icon2" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={icon3} alt="icon3" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={icon4} alt="icon4" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={profile} alt="profile" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
