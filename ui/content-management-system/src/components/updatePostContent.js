import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { ImagePicker } from "react-file-picker";
import "../styles/TextEditor.css";
import tinymce from "react-tinymce";
export default function UpdatePostContent() {
  const history = useHistory();
  const [category, setCategory] = useState("Category");
  const [tag, setTag] = useState([]);
  const [postContent, setpostContent] = useState("");
  const [title, setTitle] = useState("");
  const editorRef = useRef();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState("Blogs");
  const [blogName, setBlogName] = useState([]);
  const [blogId, setBlogId] = useState(" ");

  const queryParams = new URLSearchParams(window.location.search);
  var post_id = queryParams.get("post_id");
  const updatePost = async () => {
    // console.log("Update Called");
    try {
      var Post = await axios.get(
        `http://localhost:3001/postContent/${post_id}`
      );
      //console.log(Post);
      if (Post) {
        var { post_title, categories, blog_id, post_content } = Post.data[0];
        setTitle(post_title);
        setCategory(categories);
        setTimeout(() => {
          setpostContent(editorRef.current.setContent(post_content));
        }, 100);

        // setBlogId(blog_id);
        axios
          .get(`http://localhost:3001/get/blog/${blog_id}`, {
            blog_id: blog_id,
          })
          .then((data) => {
            setBlog(data.data.blog_title);
            setBlogId(blog_id);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        console.log("No Post found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Change post method to update
  const postPublishHandler = async () => {
    try {
      let updateResponse = await axios.put(
        "http://localhost:3001/updatePostData",
        {
          post_id: post_id,
          post_title: title,
          categories: category,
          post_content: editorRef.current.getContent(),
          blog_id: blogId,
          status: true,
        }
      );
      console.log("updateResponse", updateResponse);
      if (updateResponse.status == 200) {
        history.push(`/postContent?post_id=${post_id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get Blog name values from database
  useEffect(() => {
    setTimeout(() => {
      updatePost();
    }, 2000);

    console.log("Called");
    // }, []);

    // //Get Blog name values from database
    // useEffect(() => {
    axios
      .get("http://localhost:3001/get/blog")
      .then((Blog) => {
        setBlogName(Blog.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  var user_id = localStorage.getItem("user_id");
  return (
    <>
      <div className="container">
        <h1>New Post</h1>

        <div className="d-flex justify-content-between">
          <input
            type="text"
            placeholder="Title"
            className="w-100 text-left"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <div className="dropdown">
            <button className="editor-button" value={category}>
              {category}
            </button>
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
            <button className="editor-button" value={blog}>
              {blog}
            </button>
            <div className="dropdown-content">
              {blogName.map((value) => {
                if (value.user_id == user_id) {
                  return (
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={() => {
                        setBlog(value.blog_title);
                        setBlogId(value.blog_id);
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

              // content_style:
              //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        <div>
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
          onClick={() => postPublishHandler()}
        >
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-share-post-blogger-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            alt="Post"
          />
          &nbsp; Publish
        </button>
        <button
          style={{
            borderRadius: "7px",
            padding: "10px 44px",
            marginTop: "10px",
            marginRight: "10px",
            marginBottom: "20px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/share.png"
            alt="Share"
          />
          &nbsp; Share
        </button>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: postContent }}></div> */}
    </>
  );
}
