import React, { useEffect, useState } from "react";
import "../styles/PostView.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { Editor, get, getContent } from "@tinymce/tinymce-react";
import TinyMCE from "react-tinymce";

import "@pathofdev/react-tag-input/build/index.css";

export default function Draft() {
  const [drafts, setDrafts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getPost")
      .then((Post) => {
        setDrafts(Post.data);
        console.log(Post.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <ul
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
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
                    width: "22rem",
                    height: "38rem",
                    margin: "30px 30px",
                  }}
                  key={post.post_id}
                >
                  <Card.Img
                    variant="top"
                    style={{ width: "22rem", height: "15rem" }}
                    src={post.post_image}
                  />
                  <Card.Body style={{ display: "inline" }}>
                    <Card.Title>{post.post_title}</Card.Title>
                    <Card.Text>{post.post_content.substr(0, 350)}</Card.Text>
                    <Button className="readMorebutton" variant="primary">
                      Read more
                    </Button>
                    <br />
                  </Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      style={{
                        width: "120px",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                        width: "50%",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{
                        width: "120px",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                        width: "50%",
                      }}
                    >
                      Publish
                    </Button>
                  </ButtonGroup>
                </Card>
                ;
              </li>
            </>
          );
        return true;
      })}
    </ul>
  );
}
