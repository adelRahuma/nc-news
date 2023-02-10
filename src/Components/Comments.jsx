import React, { useRef, useState, useEffect } from "react";
import getUsers from "../Utilis/FetchData";
import { useLocation } from "react-router-dom";
import postComment from "../Utilis/PostComment";
import { logDOM } from "@testing-library/react";

export default function Comments() {
 
  const location = useLocation();
 
  const { articles } = location.state;
    
  const [user, setUser] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    
    getUsers()
      .then((data) => {
        for (let i in data) {
          if (data[i].username === articles[0].author) 
          setUser(data[i]);
        }
      })
      .catch((err) => alert(err));
  }, []);

  function handleSubmit(e) { 
   
    alert(inputRef.current.value);
    postComment(
      inputRef.current.value,
      articles[0].author,
      articles[0].article_id
    ).catch((err) => console.log(err));
 e.preventDefault();
   
  }
  return (
    <>
      <div className="container">
        <div className="row" style={{ padding: "5px" }}>
          <h6>Add Comment</h6>
          <br />
        </div>
        <div className="row">
          <div className="col-2">
            <img
              className="rounded-circle"
              src={user.avatar_url}
              style={{
                height: "60px",
                width: "60px",
                objectFit: "fill",
                padding: "20px",
                maxWidth: "300px",
                boxShadow: "7px 2px 10px 2px #6F6F6F",
              }}
              alt={user.name}
            />
          </div>
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
                  id="msg"
                  rows="6"
                  ref={inputRef}
                ></textarea>
                <br />
                <button
                 
                  className="btn btn-primary btn-block mb-2"
                  onClick={handleSubmit}
                >
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
    </>
  );
}
