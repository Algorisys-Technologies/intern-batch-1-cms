import React, { useEffect, useState } from "react";
import "../styles/PostView.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";

const AddPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getPost")
      .then((Post) => {
        setPosts(Post.data);
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
      {posts.map((post) => {
        if (post.status)
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
                    <Card.Text>{post.summary}</Card.Text>
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
                      }}
                    >
                      <img
                        src="https://img.icons8.com/material-outlined/30/000000/filled-like.png"
                        alt="Like"
                      />
                    </Button>
                    <Button
                      style={{
                        width: "120px",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"
                        alt="Comment"
                      />
                    </Button>
                    <Button
                      style={{
                        width: "120px",
                        border: "1px solid black",
                        backgroundColor: "transparent",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/external-those-icons-lineal-those-icons/30/000000/external-share-network-sharing-those-icons-lineal-those-icons-1.png"
                        alt="Share"
                      />
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
};
export default AddPost;
