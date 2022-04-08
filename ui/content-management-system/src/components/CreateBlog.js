import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Dropdown, Modal } from "react-bootstrap";
import axios from "axios";
import "../styles/blog.css";

import { ImagePicker } from "react-file-picker";

export default function CreateBlog() {
  const initialFormData = Object.freeze({
    blog_title: " ",
    summary: " ",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [imageDataBlog, setImageDataBlog] = useState(" ");

  // Handling Change Event ,Setting State
  const handleChange = (event) => {
    updateFormData({
      ...formData,

      [event.target.name]: event.target.value.trim(),
    });
    // console.log(formData);
  };

  const handleBlogPost = (event) => {
    event.preventDefault();
    if (formData.blog_title.length < 1 || formData.blog_title == " ") {
      return alert("Blog Title is Required");
    }
    if (formData.summary.length <= 40 || formData.summary == " ") {
      return alert("Summary should be atleast 40 characters");
    }
    if (imageDataBlog == " ") {
      return alert("Select a blog Thumbnai");
    }
    var user_id = localStorage.getItem("user_id");
    var user_name = localStorage.getItem("user_name");

    // post blog using axios
    axios
      .post("http://localhost:3001/create/blog", {
        user_id: user_id,
        status: "true",
        blog_title: formData.blog_title,
        summary: formData.summary,
        blog_image: imageDataBlog,
        created_at: new Date(),
        updated_at: null,
        created_by: user_name,
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

  return (
    <div className="container newcontainer" style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            className="apply-border"
            placeholder="The Python Expert"
            onChange={handleChange}
            name="blog_title"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Blog Summary</Form.Label>
          <Form.Control
            onChange={handleChange}
            className="apply-border"
            as="textarea"
            name="summary"
            rows={3}
          />
        </Form.Group>
      </Form>
      <ImagePicker
        extensions={["jpg", "jpeg", "png"]}
        dims={{
          minWidth: "0",
          maxWidth: "10000",
          minHeight: "0",
          maxHeight: "10000",
        }}
        onChange={(base64) => {
          setImageDataBlog(base64);
          console.log(base64);
        }}
        onError={(errMsg) => console.log(errMsg)}
      >
        <div className="text-center mb-4">
          <button
            style={{
              padding: "3px 20px",
              borderRadius: "6px",
            }}
          >
            Select Blog image
          </button>
        </div>
      </ImagePicker>
      <div className="text-center">
        <button
          type="submit"
          onClick={handleBlogPost}
          className="btn btn-primary"
        >
          Create Blog
        </button>
      </div>
      <img className="m-4 w-100" src={imageDataBlog} />
    </div>
  );
}
