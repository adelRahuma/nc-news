import React from "react";
import "react-bootstrap";

export default function Articles() {
  return (
    <div className="container">
      <div class="row">
        <h4>List of Articles</h4>
        <br />
      </div>
      <div
        className="row row border border-dark"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="col-1">ID</div>
        <div className="col-2">Title</div>
        <div className="col-2">Topic</div>
        <div className="col-2">Author</div>
        <div className="col-4">Body</div>
        <div className="col-1">Image</div>
      </div>
      <div className="row row border border-dark" style={{ padding: "6px" }}>
        <div className="col-1">1</div>
        <div className="col-2">2</div>
        <div className="col-2">3</div>
        <div className="col-2">4</div>
        <div className="col-4">5</div>
        <div className="col-1">6</div>
      </div>
    </div>
  );
}
