import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (value, type = "mail") => {
    // setEmail(e.target.value);
    // console.log(value);
    if (type === "mail") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const authenticationAPI = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === " ") {
      alert("Password is required");
    }
    if (email && password) {
      axios
        .post("http://localhost:3001/login", {
          user_email: email,
          user_password: password,
        })
        .then(function (response) {
          alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          alert(error.message);
        });
    }
    // console.log("test");
    // setTimeout(console.log("test"), 10000);
    // console.log("test");
  };

  return (
    <div>
      <Form className="layout-set-login">
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="input-text">Username</Form.Label>
          <Form.Control
            className="input-login"
            type="email"
            placeholder="e.g. abc@gmail.com"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="input-text">Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => handleChange(e.target.value, "p")}
          />
        </Form.Group>
        <Button variant="success" type="submit" onClick={authenticationAPI}>
          Sign In
        </Button>
        <p>Forgot Password</p>
        <p>
          <Link to="/signup">New User / Sign Up</Link>
        </p>
      </Form>
    </div>
  );
}
