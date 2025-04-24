import React from "react";
import "bootstrap5/src/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <div
        className="container d-flex justify-content-between align-items-center text-light p-2 mt-3"
        style={{
          width: "40%",
          borderRadius: "30px",
          backgroundColor: "#780C28",
          fontFamily: "cursive",
        }}
      >
        <div className="d-flex justify-conetent-start gap-3 align-items-center">
          <img src="cookie.png" alt="Wait for logo" />
          <h5 className="fw-normal ">TODO APP</h5>
        </div>
        <div>
          <h5 className="fw-normal pe-2">~By SahilPhalke</h5>
        </div>
      </div>
    </>
  );
}

export default Navbar;
