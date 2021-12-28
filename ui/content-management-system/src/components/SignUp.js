import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, Text, Image } from "react-bootstrap";
import "../styles/SignUp.css";

import SignUpWithGoogle from "../assets/signInGoogleimage.PNG";
export default function SignUp() {
  return (
    <div>
      <Form className="layout-set-signup">
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="input-text">Name</Form.Label>
          <Form.Control
            className="input-login"
            type="text"
            placeholder="e.g. John Smith"
          />
        </Form.Group>

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

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="input-text">Confirm Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter Password Again"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Sign Up
        </Button>
        <p>Already a User ? Sign In</p>

        <Image
          className="signinwithgoogle"
          alt="Sign In with Google"
          src={SignUpWithGoogle}
        />
      </Form>
    </div>
  );
}
