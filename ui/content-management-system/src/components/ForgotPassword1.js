import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/ForgotPassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState(" ");

  const handleSubmit = async () => {
    // alert("Request Initiated");
    await axios
      .post(`http://localhost:3001/resetPasswordEmail`, {
        user_email: userEmail,
      })
      .then((response) => {
        console.log(response);
        alert(
          "An email has been sent to the registered email id. Follow the stes to reset your password"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginBottom: "80px" }}>
      <Form className="layout-set-fp">
        <br />
        <Form.Label>
          <h2>
            <b>Password reset</b>
          </h2>
          <br />
          Enter the email associated
          <br /> with your CMS account
        </Form.Label>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="input-text">Email:</Form.Label>
          <Form.Control
            className="input-login"
            type="email"
            placeholder="abc@example.com"
            onChange={(e) => {
              e.preventDefault();
              setUserEmail(e.target.value);
              console.log(userEmail);
            }}
            value={userEmail}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
