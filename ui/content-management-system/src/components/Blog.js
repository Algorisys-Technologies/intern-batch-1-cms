import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, useHistory } from "react-router-dom";
export default function Blog({ type }) {
  const [blogs, setBlogs] = useState([]);
  var user_id = localStorage.getItem("user_id");

  const handleBlogDelete = (blogIdForDeletion) => {
    axios
      .delete(`http://localhost:3001/delblog/${blogIdForDeletion}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });

    window.location.reload();
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/get/blog")
      .then((Blog) => {
        // setBlogs(Blog.data.blog);
        setBlogs(Blog.data);

        //console.log(Blog.data.blog);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (type == undefined) {
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
                    <div className="d-flex align-items-center justify-content-between flex-row">
                      <p
                        style={{ fontSize: "1.1rem" }}
                        className="p-2 text-muted ml-4"
                      >
                        {blog.blog_title}
                      </p>

                      <p
                        style={{
                          fontSize: "1.1rem",
                        }}
                        className="text-muted text-justify p-2 mr-4"
                      >
                        Author : {blog.created_by}
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
  } else {
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          {blogs.map((blog) => {
            if (blog.user_id == user_id) {
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
                      <div className="d-flex align-items-center justify-content-between flex-row">
                        <p
                          style={{ fontSize: "1.1rem" }}
                          className="p-2 text-muted ml-4"
                        >
                          {blog.blog_title}
                        </p>

                        <p
                          style={{
                            fontSize: "1.1rem",
                          }}
                          className="text-muted text-justify p-2 mr-4"
                        >
                          Author : {blog.created_by}
                        </p>
                        <Link
                          style={{ textDecoration: "none", color: "unset" }}
                          className="d-flex justify-content-center"
                          to={"/blog"}
                        >
                          {" "}
                          <button
                            style={{
                              fontSize: "1.1rem",
                            }}
                            className="text-justify mr-4 mt-1 btn btn-danger btn-sm"
                            value={blog.blog_id}
                            onClick={(e) => {
                              handleBlogDelete(e.target.value);
                            }}
                          >
                            Delete
                          </button>
                        </Link>
                      </div>
                      <div className="ml-4 p-2 text-justify">
                        {blog.summary.substring(0, 250) + "..."}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </>
    );
  }
}
