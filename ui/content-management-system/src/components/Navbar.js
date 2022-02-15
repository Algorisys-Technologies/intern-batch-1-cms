import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
//import Avatar from "react-avatar";
//import SearchField from "react-search-field";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  NavDropdown,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const navigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> Content management system</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navbarLink" href="#action1">
              <Link to="/dashboard"> Dashboard</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action1">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/viewpost">Posts</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/blog">Blogs</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/viewdraft">Drafts</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/createpost"> Design</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/login">Login</Link>
            </Nav.Link>
            <NavDropdown
              title="Blogs"
              className="navbarLink"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">New Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Edit blogs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Blogs</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className="navbarLink" href="#action6">
              Notifications
            </Nav.Link> */}
            {/* <Nav.Link className="navbarLink" href="#action7">
              Settings
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex navbarLink">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>

        {/* <Avatar
          color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
          name="Anonymous"
          round={true}
          size={40}
        />
        <p style={{ marginTop: "15px", marginLeft: "5px" }}> Anonomous</p> */}
      </Container>
    </Navbar>
  );
};

export default navigationBar;
