import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, Text } from "react-bootstrap";
import "../styles/Login.css";
export default function Login() {
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
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="input-text">Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Sign In
        </Button>
        <p>Forgot Password</p>
        <p>New User / Sign Up</p>
      </Form>
    </div>
  );
}
