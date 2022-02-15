import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

import axios from "axios";

export default function SignUp() {
  const initialFormData = Object.freeze({
    user_email: "",
    user_name: "",
    password: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  // Submit form data to Database
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form User input validation
    if (formData.user_name.length < 3) {
      return alert("Name should be atleast 3 characters long !");
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.user_email)
    ) {
      return alert("Email Should be in format 'abc@domain.tld'");
    }
    if (formData.password.length < 8) {
      return alert("Password Should be atleast 8 characters long !");
    }
    if (formData.password !== formData.confirm_password) {
      return alert("Confirm Password Do not match !");
    }

    // post data using axios
    axios
      .post("http://localhost:3001/register", {
        user_email: formData.user_email,
        user_name: formData.user_name,
        user_password: formData.password,
        user_role: "User",
        user_image: null,
        created_at: "12:10:00+14:59",
        updated_at: null,
        created_by: formData.user_name,
        updated_by: null,
      })
      .then(
        (response) => {
          alert(response.data);
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  // Handling Change Event ,Setting State
  const handleChange = (event) => {
    updateFormData({
      ...formData,

      [event.target.name]: event.target.value.trim(),
    });
  };
  return (
    <div>
      <Form className="layout-set-signup">
        <br />
        <Form.Group controlId="formBasicName">
          <Form.Label className="input-text">Name</Form.Label>
          <Form.Control
            className="input-login"
            type="text"
            name="user_name"
            placeholder="e.g. John Smith"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="input-text">Username</Form.Label>
          <Form.Control
            className="input-login"
            type="email"
            placeholder="e.g. abc@gmail.com"
            name="user_email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="input-text">Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label className="input-text">Confirm Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter Password Again"
            name="confirm_password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="success" type="submit">
          Sign Up
        </Button>
        <p>
          <Link to="/login">Already a User ? Sign In</Link>
        </p>
      </Form>
    </div>
  );
}
