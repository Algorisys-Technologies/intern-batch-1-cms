import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get/blog")
      .then((Blog) => {
        setBlogs(Blog.data);
        console.log(Blog.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        {blogs.map((blog) => {
          return (
            <div
              className="blogs py-1 w-75 d-flex justify-content-between flex-wrap align-items-center"
              style={{
                marginTop: "30px",
                borderRadius: "25px",
                paddingLeft: "30px",
                paddingRight: "30px",
                border: "1px dashed black",
                backgroundColor: "#fbfefd",
              }}
            >
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "30px",
                  border: "1px solid black",
                }}
                src={blog.blog_image}
                alt=""
              />
              <p style={{ fontSize: "1.1rem" }} className="text-muted m-0">
                {blog.blog_title}
              </p>
              <br />

              <p
                style={{
                  fontSize: "1.1rem",
                  zIndex: "3",
                }}
                className="text-muted text-justify"
              >
                6post
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
