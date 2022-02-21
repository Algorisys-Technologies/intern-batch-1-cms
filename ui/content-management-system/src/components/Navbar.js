import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
//import SearchField from "react-search-field";
import Avatar from "react-avatar";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";

import {
  NavDropdown,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const NavigationBar = () => {
  //Show whether user has logged in
  const [show, setShow] = useState(true);
  const [userName, setUserName] = useState(localStorage.getItem("user_name"));
  useEffect(() => {
    console.log("UseEffect");
    const userLoggedIn = localStorage.getItem("user_name");
    if (userLoggedIn != null) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [show]);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Nav.Link id="navLogo" className="navbarLink" href="#action1">
            <Link to="/">
              <img src={logo} style={{ width: "70px" }} />
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "80px" }}
            navbarScroll
          >
            <Nav.Link className="navbarLink" href="#action1">
              <Link to="/dashboard"> Dashboard</Link>
            </Nav.Link>
            {/* <Nav.Link className="navbarLink" href="#action1">
              <Link to="/">Home</Link>
            </Nav.Link> */}
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/viewpost">Posts</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link style={{ color: "#2197bb", fontWeight: "bold" }} to="/blog">
                Blogs
              </Link>
            </Nav.Link>

            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/viewdraft">Drafts</Link>
            </Nav.Link>
            <Nav.Link className="navbarLink" href="#action2">
              <Link to="/createpost"> Design</Link>
            </Nav.Link>
            {localStorage.getItem("user_name") === null && (
              <Nav.Link className="navbarLink" href="#action2">
                <Link
                  style={{ color: "#2197bb", fontWeight: "bold" }}
                  to="/login"
                >
                  Login
                </Link>
              </Nav.Link>
            )}
            <NavDropdown
              title="Blogs"
              className="navbarLink"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <Link to="/createblog">New Blog</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Edit blogs</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            {/* <Nav.Link className="navbarLink" href="#action6">
              Notifications
            </Nav.Link> */}
            {/* <Nav.Link className="navbarLink" href="#action7">
              Settings
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex navbarLink">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>

        {!show && (
          <p style={{ marginTop: "15px", marginLeft: "5px" }}>
            <Avatar
              color={Avatar.getRandomColor("sitebase", [
                "red",
                "green",
                "blue",
              ])}
              name={localStorage.getItem("user_name")}
              round={true}
              size={40}
            />
            {localStorage.getItem("user_name")}
          </p>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
