import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";

import { ImagePicker } from "react-file-picker";

export default function App() {
  const [category, setCategory] = useState("Category");
  const [blog, setBlog] = useState("Blogs");
  const [tag, setTag] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const editorRef = useRef(null);
  const [show, setShow] = useState(false);
  const [imageData, setImageData] = useState("");
  const [summary, setSummary] = useState("");

  const postHandler = async () => {
    if (summary && imageData)
      try {
        await axios.post("http://localhost:3001/post", {
          user_id: "871ecb13-a972-48da-ac4d-9dc9a0088365",
          post_title: title,
          categories: category,
          status: true,
          post_content: editorRef.current.getContent(),
          created_at: "11:00:00+05:30",
          created_by: "Zaki",
          post_image: imageData,
          summary: summary,
        });
      } catch (err) {
        console.log(err.message);
      }
    else {
      console.log(imageData);
      alert("Summary and image are required");
    }
  };
  const handleChange = (post_summary) => {
    setSummary(post_summary);
  };

  const handleCloseModal = () => setShow(false);
  const handlePostModal = () => setShow(true);

  const logy = async (type) => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setContent(editorRef.current.getContent());
    }

    if (type === "Draft") {
      try {
        await axios.post("http://localhost:3001/post", {
          user_id: "871ecb13-a972-48da-ac4d-9dc9a0088365",
          post_title: title,
          categories: category,
          status: false,
          post_content: editorRef.current.getContent(),
          created_at: "11:00:00+05:30",
          created_by: "Zaki",
        });
      } catch (err) {
        console.log(err.message);
      }
    } else if (type === "Post") {
      console.log("Inside logy");
      handlePostModal();
      //console.log(imageData);
    }
  };
  return (
    <>
      <h1>New Post</h1>

      <Modal show={show} onHide={handleCloseModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please provide the following details</Modal.Title>
        </Modal.Header>
        <label style={{ position: "relative", top: "20px", left: "15px" }}>
          Post summary
        </label>
        <Modal.Body>
          {/* <input type="textarea" rows="4" cols="50" style={{ width: "100%" }} /> */}
          <textarea
            rows="6"
            cols="60"
            onChange={(e) => handleChange(e.target.value, "summary")}
            placeholder="Please Write a short attractive summary (60 + words), it increases the chance of user opening your blog."
          ></textarea>
          <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            dims={{
              minWidth: "0",
              maxWidth: "10000",
              minHeight: "0",
              maxHeight: "10000",
            }}
            onChange={(base64) => {
              setImageData(base64);
              console.log(base64);
            }}
            onError={(errMsg) => console.log(errMsg)}
          >
            <button
              style={{
                marginLeft: "135px",
                marginTop: "20px",
                padding: "3px 20px",
                borderRadius: "6px",
              }}
            >
              Select post image
            </button>
          </ImagePicker>

          <img style={{ width: "100%" }} src={imageData} alt="Post card" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            // onClick={handleCloseModal}
            style={{
              position: "relative",
              right: "180px",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "10xpx",
              paddingBottom: "10px",
            }}
            onClick={postHandler}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>

      <input
        type="text"
        style={{ width: "58%", marginTop: "20px", border: "1px solid" }}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <Button onClick={handleImagePicker}>Test</Button> */}
      <Dropdown style={{ display: "inline" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {category}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Later add categories array below*/}
          {["Personal", "Business/corporate", "Fashion ", "Travel", "Food"].map(
            (value) => {
              return (
                <Dropdown.Item
                  href="#/action-1"
                  onSelect={() => setCategory(value)}
                >
                  {value}
                </Dropdown.Item>
              );
            }
          )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ display: "inline" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {blog}
        </Dropdown.Toggle>

        {/* Later add blogs array below*/}
        <Dropdown.Menu>
          {["Blog 1", "Blog 2", " Blog 3", "Blog 4", "Blog 5"].map((value) => {
            return (
              <Dropdown.Item href="#/action-1" onSelect={() => setBlog(value)}>
                {value}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ marginLeft: "15%", width: "70%" }}>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="40vylhkjzyqvjvz5pyqkbqqz0hlgvsqzofu0wa4lfa40tf2m"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo| " +
              "| bold italic underline strikethrough |" +
              "| forecolor backcolor casechange permanentpen formatpainter removeformat |" +
              "| alignleft aligncenter  alignleft aligncenter |" +
              " fontselect fontsizeselect formatselect | " +
              "bullist numlist outdent indent | " +
              "  fullscreen  preview save print" +
              "insertfile image media pageembed template link anchor codesample" +
              "showcomments addcomment" +
              "| help",

            // content_style:
            //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      {/* <input
        type="text"
        style={{ width: "65%", borderRadius: "10px", marginTop: "20px" }}
      />
      <button style={{ borderRadius: "5px" }} onClick={}>Add tag</button> */}
      <div style={{ marginLeft: "15%", width: "70%" }}>
        <ReactTagInput
          placeholder="Add tag..."
          tags={tag}
          onChange={(newTag) => setTag(newTag)}
        />
      </div>
      <br />
      <button
        style={{
          borderRadius: "7px",
          padding: "10px 44px",
          marginTop: "10px",
          marginRight: "10px",
          boxShadow:
            " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
        onClick={() => logy("Draft")}
      >
        <img
          src="https://img.icons8.com/external-soft-fill-juicy-fish/20/000000/external-draft-business-process-soft-fill-soft-fill-juicy-fish.png"
          alt="Draft"
        />
        &nbsp; Draft
      </button>
      <button
        style={{
          borderRadius: "7px",
          padding: "10px 44px",
          marginTop: "10px",
          marginRight: "10px",
          boxShadow:
            " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
        onClick={() => logy("Post")}
      >
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-share-post-blogger-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
          alt="Post"
        />
        &nbsp; Post
      </button>
      <button
        style={{
          borderRadius: "7px",
          padding: "10px 44px",
          marginTop: "10px",
          marginRight: "10px",
          marginBottom: "20px",
          boxShadow:
            " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
      >
        <img
          src="https://img.icons8.com/material-outlined/24/000000/share.png"
          alt="Share"
        />
        &nbsp; Share
      </button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
