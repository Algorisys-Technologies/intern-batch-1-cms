import React, { useRef, useState, useEffect } from "react";
import Avatar from "react-avatar";
import "../styles/PostRender.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostRender() {
  const [content, setContent] = useState();
  const [authorName, setAuthorName] = useState("");
  const userId = useRef(null);

  const queryParams = new URLSearchParams(window.location.search);
  const post_id = queryParams.get("post_id");

  //console.log(post_id);
  const postData = axios
    .get(`http://localhost:3001/postContent/${post_id}`)
    .then((data) => {
      var postDataObject = data.data[0];
      setContent(postDataObject.post_content);
      userId.current.setContent(postDataObject.user_id);
    })
    .catch((e) => {
      console.log(e.message);
    });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/postuser/${post_id}`)
      .then((response) => {
        setAuthorName(response.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="post-wrapper">
      <div className="post-header">
        <p style={{ marginLeft: "5px" }}>
          <Avatar
            color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
            name={authorName}
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
            {authorName}
          </p>
        </p>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
