import React, { useState, useEffect } from "react";
import getUsers from "../Utilis/FetchData";
import { useLocation } from "react-router-dom";

export default function Comments() {
  const location = useLocation();
  const { articles } = location.state;
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      // const userObj=data.filter((item)=>item.username === articles[0].author)
      // setUser(userObj)
      console.log(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ padding: "5px" }}>
        <h6>Add Comment {user.name}</h6>
        <br />
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <div className="form-outline mb-2">
              <input
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "5px",
                  textAlign: "center",
                }}
                type="text"
                readOnly
                value={articles[0].title}
                id="form4Example1"
                className="form-control input-lg"
              />
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="6"
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary btn-block mb-2">
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <div
          className="col-4"
          style={{ display: "absolute", textAlign: "center" }}
        >
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
        </div> */}
      </div>
    </div>
  );
}
