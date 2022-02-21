import React from "react";
import "../styles/loader.css";
export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ border: "1px dotted black" }}
    >
      <div
        style={{
          width: "500px",
          height: "200px",
          marginTop: "150px",
        }}
      >
        <div id="loadercontainer">
          <div class="lds-dual-ring"></div>
        </div>
      </div>
    </div>
  );
}
