import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Modal } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";
import Loader from "./Loader";
import { ImagePicker } from "react-file-picker";
import "../styles/TextEditor.css";
import tinymce from "react-tinymce";
import { useHistory } from "react-router-dom";
export default function TextEditor() {
  const history = useHistory();
  const [category, setCategory] = useState("Category");
  const [tag, setTag] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const editorRef = useRef(null);
  const [show, setShow] = useState(false);
  const [imageData, setImageData] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState("Blogs");
  const [blogName, setBlogName] = useState([]);
  const [blogId, setBlogId] = useState(" ");
  const [postContent, setPostContent] = useState(" ");

  var user_id = localStorage.getItem("user_id");
  var user_name = localStorage.getItem("user_name");

  const postHandler = async (actionType) => {
    if (summary && imageData) {
      try {
        await axios.post("http://localhost:3001/post", {
          user_id: user_id,
          blog_id: blogId,
          post_title: title,
          categories: category,
          status: actionType,
          post_content: editorRef.current.getContent(),
          created_at: "11:00:00+05:30",
          created_by: user_name,
          post_image: imageData,
          summary: summary,
        });
        history.push("/blog");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Summary and image are required");
    }
  };

  //Get Blog name values from database
  useEffect(() => {
    axios
      .get("http://localhost:3001/get/blog")
      .then((Blog) => {
        setBlogName(Blog.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChange = (post_summary) => {
    setSummary(post_summary);
  };

  const handleCloseModal = () => setShow(false);
  const handlePostModal = () => setShow(true);

  const logy = async () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
    handlePostModal();
  };

  return (
    <>
      <div className="container">
        <h1>New Post</h1>

        <Modal show={show} onHide={handleCloseModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Please provide the following details</Modal.Title>
          </Modal.Header>
          <label style={{ position: "relative", top: "20px", left: "15px" }}>
            Post summary
          </label>
          <Modal.Body>
            <textarea
              rows="6"
              cols="48"
              onChange={(e) => handleChange(e.target.value, "summary")}
              placeholder="Please Write a short attractive summary (60 + words), it increases the chance of user opening your blog."
            ></textarea>
            <ImagePicker
              extensions={["jpg", "jpeg", "png"]}
              dims={{
                minWidth: "0",
                maxWidth: "5000",
                minHeight: "0",
                maxHeight: "5000",
              }}
              onChange={(base64) => {
                setImageData(base64);
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
              style={{
                position: "relative",
                right: "100px",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "10xpx",
                paddingBottom: "10px",
              }}
              onClick={() => postHandler(true)}
            >
              <img
                className="mr-2"
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-share-post-blogger-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                alt="Post"
              />
              Post
            </Button>
            <Button
              variant="primary"
              style={{
                position: "relative",
                right: "60px",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "10xpx",
                paddingBottom: "10px",
              }}
              onClick={() => postHandler(false)}
            >
              <img
                className="mr-2"
                src="https://img.icons8.com/external-soft-fill-juicy-fish/20/000000/external-draft-business-process-soft-fill-soft-fill-juicy-fish.png"
                alt="Draft"
              />
              Draft
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="d-flex justify-content-between">
          <input
            type="text"
            placeholder="Title"
            className="w-100 text-left"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="dropdown">
            <button className="editor-button">{category}</button>
            <div className="dropdown-content">
              {[
                "Personal",
                "Business/corporate",
                "Fashion ",
                "Travel",
                "Food",
              ].map((value) => {
                return (
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => setCategory(value)}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="dropdown">
            <button className="editor-button">{blog}</button>
            <div className="dropdown-content">
              {blogName.map((value) => {
                if (value.user_id == user_id) {
                  return (
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={async () => {
                        await setBlog(value.blog_title);
                        await setBlogId(value.blog_id);
                      }}
                    >
                      {value.blog_title}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div>
          {loading && <Loader />}
          <Editor
            onInit={(evt, editor) => {
              editorRef.current = editor;
              setLoading(false);
            }}
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
            }}
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
          onClick={logy}
        >
          &nbsp; Save / Publish
        </button>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
    </>
  );
}
