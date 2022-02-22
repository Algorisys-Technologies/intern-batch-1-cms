import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  // const Redirect = () => {
  //   return <Redirect to="/" />;
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (value, type = "mail") => {
    if (type === "mail") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  let authenticated = false;
  var user_name;
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
          alert(response.data[0]);
          console.log(response.data);
          authenticated = true;
          user_name = response.data[1];
          localStorage.setItem("user_name", user_name);
          history.push("/");
          window.location.reload();
        })
        .catch(function (error) {
          alert(error.message);
        });
    }
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
