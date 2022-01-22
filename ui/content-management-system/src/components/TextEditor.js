import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Dropdown } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";

export default function App() {
  const [category, setCategory] = useState("Category");
  const [blog, setBlog] = useState("Blog");
  const [tag, setTag] = useState(["tags"]);
  const [content, setContent] = useState(" content");
  const [title, setTitle] = useState("title ");
  const [axiosdata, setaxiosdata] = useState("");
  const editorRef = useRef(null);

  const logy = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    // setaxiosdata({
    //   user_id: "3e7b8cf8-77b5-11ec-90d6-0242ac120003",
    //   post_title: title,
    //   categories: category,
    //   status: "false",
    //   post_content: content,
    //   created_at: "11:00:00+05:30",
    //   created_by: "Zaki",
    // });
    // setContent(editorRef.current.getContent());
    // //console.log(title);
    // await axios
    //   .post(
    //     "http://localhost:3001/post",
    //     {
    //       axiosdata,
    //     }
    //     //  {
    //     //   user_id: "3e7b8cf8-77b5-11ec-90d6-0242ac120003",
    //     //   post_title: title,
    //     //   categories: category,
    //     //   status: false,
    //     //   post_content: content,
    //     //   created_at: "11:00:00+05:30",
    //     //   created_by: "Zaki",
    //     // }
    //   )
    //   .then(function (response) {
    //     // console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log("req sent");
  };

  return (
    <>
      <h1>New Post</h1>

      <input
        type="text"
        style={{ width: "58%", marginTop: "20px", border: "1px solid" }}
        placeholder="Title"
        onChange={(title) => setTitle(title)}
      />
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
        onClick={logy}
      >
        <img src="https://img.icons8.com/external-soft-fill-juicy-fish/20/000000/external-draft-business-process-soft-fill-soft-fill-juicy-fish.png" />
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
      >
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-share-post-blogger-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
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
        <img src="https://img.icons8.com/material-outlined/24/000000/share.png" />
        &nbsp; Share
      </button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
