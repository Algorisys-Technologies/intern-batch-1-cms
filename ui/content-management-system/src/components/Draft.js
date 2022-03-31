import React, { useEffect, useState } from "react";
import "../styles/PostView.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { Editor, get, getContent } from "@tinymce/tinymce-react";
import TinyMCE from "react-tinymce";
import { Link } from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";

var dummyText =
  " lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000";
export default function Draft() {
  const [drafts, setDrafts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getPost")
      .then((Post) => {
        setDrafts(Post.data);
        // console.log(Post.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  var regex = /( |<([^>]+)>)/gi;
  return (
    <ul
      className="m-0 justify-content-center flex-wrap flex-row align-items-center d-flex"
      style={{
        textDecoration: "none",
        padding: "1rem",
      }}
    >
      {drafts.map((post) => {
        if (!post.status)
          return (
            <>
              <li style={{ display: "inline" }}>
                <Card
                  style={{
                    width: "19rem",
                    height: "29rem",
                    margin: "30px 30px",
                    borderRadius: "40px",
                    boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                    backgroundColor: "#fbfefd",
                    border: "none",
                  }}
                  key={post.post_id}
                  className="postCard"
                >
                  <Card.Img
                    variant="top"
                    style={{
                      width: "19rem",

                      height: "12rem",
                    }}
                    className="mt-3"
                    src={post.post_image}
                  />
                  <Card.Body className="d-inline">
                    <Card.Title style={{ fontSize: "25px" }}>
                      {post.post_title}
                    </Card.Title>
                    <Card.Text>
                      {post.summary.substring(0, 100) + "..."}
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "/updatepost",
                        search: `post_id=${post.post_id}`,
                      }}
                    >
                      <Button
                        style={{ bottom: "30px", left: "110px" }}
                        className="readMorebutton"
                        variant="primary"
                      >
                        Edit Post
                      </Button>
                    </Link>
                    <br />
                  </Card.Body>
                </Card>
              </li>
            </>
          );
        return true;
      })}
    </ul>
  );
}
