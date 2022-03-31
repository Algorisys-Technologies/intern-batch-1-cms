import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
export default function Blog() {
  var dummyText = `Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived
  not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with
  desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum`;
  const [blogs, setBlogs] = useState([]);
  var user_id = localStorage.getItem("user_id");

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
            <Link
              style={{ textDecoration: "none", color: "unset" }}
              className="d-flex justify-content-center"
              to={`/viewpost?blog_id=${blog.blog_id}`}
            >
              <div
                className="py-1 w-75 d-flex"
                style={{
                  marginTop: "20px",
                  borderRadius: "25px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  backgroundColor: "#fbfefd",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 0, 0, 0), rgb(228 228 228 / 58%))",
                  boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                }}
              >
                <img
                  className="mt-2 mb-2"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "30px",
                    objectFit: "cover",
                    boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                  }}
                  src={blog.blog_image}
                  alt=""
                />
                <div className="d-flex w-100 flex-column">
                  <div className="d-flex justify-content-between flex-row">
                    <p
                      style={{ fontSize: "1.1rem" }}
                      className="p-2 text-muted ml-4"
                    >
                      {blog.blog_title}
                    </p>
                    {/* <p
                    style={{ fontSize: "1.1rem" }}
                    className="p-2 text-muted ml-4"
                  >
                    12 March 2022
                  </p> */}
                    <p
                      style={{
                        fontSize: "1.1rem",
                      }}
                      className="text-muted text-justify p-2 mr-4"
                    >
                      {blog.created_by}
                    </p>
                  </div>
                  <div className="ml-4 p-2 text-justify">
                    {blog.summary.substring(0, 250) + "..."}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
