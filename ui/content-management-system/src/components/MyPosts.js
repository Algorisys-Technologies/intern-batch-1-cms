import React, { useEffect, useState } from "react";
import "../styles/PostView.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  var user_id = localStorage.getItem("user_id");

  const handleDelete = (post_id) => {
    axios
      .delete(`http://localhost:3001/delpost/${post_id}`, { post_id: post_id })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/getPost")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <ul
      className="m-0 justify-content-center flex-wrap flex-row align-items-center d-flex"
      style={{
        textDecoration: "none",
        padding: "1rem",
      }}
    >
      {posts.map((post) => {
        if (post.status && post.user_id == user_id)
          return (
            <div>
              <li style={{ display: "inline" }}>
                <Card
                  style={{
                    width: "19rem",
                    height: "26.5rem",
                    margin: "30px 30px",
                    borderRadius: "40px",
                    // boxShadow: "-3px -3px 15px 1px #c2c2c2",
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
                        style={{ left: "2rem", bottom: "1.3rem" }}
                        className="readMorebutton p-2"
                        variant="primary"
                      >
                        Edit Post
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      className="readMorebutton p-2"
                      style={{ left: "11rem", bottom: "1.3rem" }}
                      onClick={() => handleDelete(post.post_id)}
                    >
                      Delete Post
                    </Button>

                    <br />
                  </Card.Body>
                  {/* <ButtonGroup aria-label="Basic example">
                    <Button
                      style={{
                        width: "120px",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottomLeftRadius: "40px",
                        boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#ff3a3a">
                            <path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667zM106.1455,115.455c-1.2685,1.14667 -2.37217,2.14283 -3.268,2.98133c-5.38217,5.01667 -11.74617,10.7715 -16.8775,15.3725c-5.13133,-4.601 -11.5025,-10.363 -16.8775,-15.3725c-0.903,-0.8385 -2.00667,-1.84183 -3.268,-2.98133c-10.17667,-9.19483 -37.18783,-33.61883 -37.18783,-54.53833c0,-13.83167 11.25167,-25.08333 25.08333,-25.08333c13.0935,0 20.683,9.1375 20.88367,9.374l11.36633,12.126l11.36633,-12.126c0.07167,-0.09317 7.79017,-9.374 20.88367,-9.374c13.83167,0 25.08333,11.25167 25.08333,25.08333c0,20.9195 -27.01117,45.3435 -37.18783,54.53833z"></path>
                          </g>
                        </g>
                      </svg>
                    </Button>
                    <Button
                      style={{
                        width: "120px",
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#2197bb">
                            <path d="M86,12.09375c-40.84597,0 -73.90625,33.05491 -73.90625,73.90625c0,20.15423 8.19628,39.31402 22.63051,53.22116l-21.1739,14.55751c-1.21273,0.83346 -1.74208,2.35964 -1.30569,3.76486c0.43672,1.40523 1.73706,2.36272 3.20847,2.36272h70.54688c40.84563,0 73.90625,-33.05491 73.90625,-73.90625c0,-40.84563 -33.05491,-73.90625 -73.90625,-73.90625zM86,18.8125c37.04719,0 67.1875,30.14031 67.1875,67.1875c0,37.04719 -30.14031,67.1875 -67.1875,67.1875h-59.73061l15.75494,-10.83136c1.81675,-1.24868 1.95677,-3.88412 0.28279,-5.31857c-14.93074,-12.79552 -23.49463,-31.39799 -23.49463,-51.03757c0,-37.04719 30.14031,-67.1875 67.1875,-67.1875zM60.3933,76.95003c-4.99002,0 -9.04932,4.05996 -9.04932,9.04997c0,4.99002 4.0593,9.04932 9.04932,9.04932c4.99002,0 9.04997,-4.05964 9.04997,-9.04932c0,-4.99002 -4.05996,-9.04997 -9.04997,-9.04997zM86,76.95003c-4.99002,0 -9.04997,4.05996 -9.04997,9.04997c0,4.99002 4.05996,9.04932 9.04997,9.04932c4.98968,0 9.04932,-4.05964 9.04932,-9.04932c0.00034,-4.99002 -4.0593,-9.04997 -9.04932,-9.04997zM111.6067,76.95003c-4.99002,0 -9.04997,4.05996 -9.04997,9.04997c0,4.99002 4.05996,9.04932 9.04997,9.04932c4.99002,0 9.04932,-4.05964 9.04932,-9.04932c-0.00034,-4.99002 -4.05964,-9.04997 -9.04932,-9.04997zM60.3933,83.66878c1.28496,0 2.33122,1.04592 2.33122,2.33122c0,1.2853 -1.04592,2.33057 -2.33122,2.33057c-1.2853,0 -2.33057,-1.04527 -2.33057,-2.33057c0,-1.2853 1.04561,-2.33122 2.33057,-2.33122zM86,83.66878c1.28496,0 2.33057,1.04592 2.33057,2.33122c0,1.2853 -1.04561,2.33057 -2.33057,2.33057c-1.28563,0 -2.33122,-1.04527 -2.33122,-2.33057c0,-1.2853 1.04592,-2.33122 2.33122,-2.33122zM111.6067,83.66878c1.28496,0 2.33057,1.04592 2.33057,2.33122c0,1.2853 -1.04561,2.33057 -2.33057,2.33057c-1.2853,0 -2.33122,-1.04527 -2.33122,-2.33057c0,-1.2853 1.04592,-2.33122 2.33122,-2.33122z"></path>
                          </g>
                        </g>
                      </svg>
                    </Button>
                    <Button
                      style={{
                        width: "120px",
                        border: "none",
                        backgroundColor: "transparent",
                        borderBottomRightRadius: "40px",
                        boxShadow: "rgb(206 206 209) 5px 9px 26px -8px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#707070">
                            <path d="M118.7539,21.54199c-0.66487,-0.09273 -1.36124,-0.0105 -2.00162,0.27995c-1.27026,0.58439 -2.08561,1.86165 -2.08561,3.26139v25.12533c-40.03955,1.11279 -59.36296,20.9366 -68.54525,37.63899c-7.98551,14.5188 -9.77368,28.89763 -10.17611,34.79753c-0.07699,0.90284 -0.11198,1.81966 -0.11198,2.75749v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014l0.014,0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014v0.014l0.014,0.014v0.014v0.014v0.014v0.014v0.014c0.22396,1.76717 1.73218,3.13542 3.55534,3.13542c1.97713,0 3.57983,-1.6062 3.58333,-3.58333c0,-0.18197 0.0105,-0.62288 0.04199,-1.30176c1.56421,-29.79695 56.60547,-36.5577 71.62467,-37.84896v24.81739c0,1.39974 0.81535,2.663 2.08561,3.2474c1.27726,0.58089 2.75748,0.38143 3.82129,-0.5319l50.16667,-43c0.79435,-0.67887 1.25976,-1.66919 1.25976,-2.71549c0,-1.04631 -0.46541,-2.03662 -1.25976,-2.71549l-50.16667,-43c-0.52841,-0.45492 -1.15479,-0.73311 -1.81967,-0.82585zM14.33333,50.16667c-7.90503,0 -14.33333,6.42831 -14.33333,14.33333v71.66667c0,7.90503 6.4283,14.33333 14.33333,14.33333h121.83333c7.90503,0 14.33333,-6.42831 14.33333,-14.33333v-30.78027c0,-1.39974 -0.81535,-2.663 -2.08561,-3.2474c-1.27726,-0.58789 -2.76798,-0.38493 -3.83528,0.5319l-7.16667,6.14486c-0.79085,0.67887 -1.24577,1.66919 -1.24577,2.71549v24.63542h-121.83333v-71.66667h40.04655c0.86784,0 1.70068,-0.31144 2.35156,-0.88184c2.84847,-2.48454 5.9314,-4.78711 9.1543,-6.84473c1.34375,-0.85384 1.95614,-2.50203 1.51172,-4.03125c-0.44442,-1.52922 -1.83716,-2.57552 -3.42936,-2.57552z"></path>
                          </g>
                        </g>
                      </svg>
                    </Button>
                  </ButtonGroup> */}
                </Card>
              </li>
            </div>
          );
        return true;
      })}
    </ul>
  );
};
export default MyPosts;
