import React from "react";
import AddComment from "./AddComment";

export default function Comments() {
  return (
    <div className="container">
      <div className="row" style={{ padding: "5px" }}>
        <h4>Add Comment</h4>
        <br />
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div className="form-outline mb-2">
              <input type="text" id="form4Example1" className="form-control" />
              <label className="form-label" htmlFor="form4Example1">
                Name
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-2">
              Send
            </button>
            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label className="form-label" htmlFor="form4Example3">
                Comment
              </label>
            </div>
          </form>
        </div>
        <div className="col-4"style={{display:"absolute",  textAlign: "center"}}>
          <div className="d-flex mb-4" style={{ maxWidth: "40%" }}>
            <button type="button" className="btn btn-danger px-3 me-2">
              <i className="fas fa-minus"></i>-
            </button>

            <div className="form-outline">
              <input
                id="form1"
                readOnly
                min="0"
                name="quantity"
                value="1"
                type="number"
                className="form-control"
              />
              <label className="form-label" htmlFor="form1">
                Quantity
              </label>
            </div>

            <button type="button" className="btn btn-success px-3 ms-2">
              <i className="fas fa-plus"></i>+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
