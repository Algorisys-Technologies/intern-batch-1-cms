import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/ForgotPassword.css";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const queryParams = new URLSearchParams(window.location.search);
      const user_id = queryParams.get("user_id");
      await axios
        .put(`http://localhost:3001/changepassword/user_id=${user_id}`, {
          user_password: password,
        })
        .then((data) => {
          console.log(data);
          alert("Password updated successfully!!");
        })
        .catch((e) => {
          console.log(e);
        });
      history.push("/login");
      window.location.reload();
    } else {
      alert("password mismatch");
    }
  };
  return (
    <div style={{ marginBottom: "80px" }}>
      <Form className="layout-set-fp">
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="input-text">New Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Enter New Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="input-text">Confirm Password</Form.Label>
          <Form.Control
            className="input-login"
            type="password"
            placeholder="Retype Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </Form.Group>
        <Button variant="success" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
