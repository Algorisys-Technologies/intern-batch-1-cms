import React, { useState } from "react";
import Avatar from "react-avatar";
import "../styles/PostRender.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostRender() {
  const [content, setContent] = useState();
  const queryParams = new URLSearchParams(window.location.search);
  const post_id = queryParams.get("post_id");
  console.log(post_id);
  const postData = axios
    .get(`http://localhost:3001/postContent/${post_id}`)
    .then((data) => {
      setContent(data.data.post_content);
    })
    .catch((e) => {
      console.log(e.message);
    });
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <p style={{ marginLeft: "5px" }}>
          <Avatar
            color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
            name={localStorage.getItem("user_name")}
            round={true}
            size={40}
          />
          <p
            style={{
              display: "inline",
              marginLeft: "10px",
              color: "rgba(0,0,0,.5)",
            }}
          >
            {localStorage.getItem("user_name")}
          </p>
        </p>
        <Link
          to={{
            pathname: "/updatepost",
            search: `post_id=${post_id}`,
          }}
        >
          <button className="post-edit">Edit</button>
        </Link>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
