import React, { useRef, useState, useEffect } from "react";
import getUsers from "../Utilis/FetchData";
import { useLocation, useSearchParams } from "react-router-dom";
import postComment from "../Utilis/PostComment";
import { logDOM } from "@testing-library/react";

export default function Comments() {
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  let show = false;
  const { articles } = location.state;
  const [message, setMessage] = useState("");
  const [user, setUser] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    getUsers().then((data) => {
      for (let i in data) {
        if (data[i].username === articles[0].author) setUser(data[i]);
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value.length >= 3) {
      postComment(
        inputRef.current.value,
        articles[0].author,
        articles[0].article_id
      ).then(() => {
        setMessage("Your Comment has been added");
        show = true;
      });
    }
  }
  return (
    <>
      <h4 aria-label="Page comments header">{!show ? message : null}</h4>
      <div className="container">
        <div className="row" style={{ padding: "5px" }}>
          <h6>Add Comment</h6>
          <br />
        </div>
        <div className="row">
          <div className="col-2">
            <p style={{ display: "none" }}>
              {(document.getElementById("img").src = user.avatar_url)}
            </p>
            {/* <img
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
            /> */}
          </div>
          <div className="col-8">
            <form>
              <div className="form-outline mb-2">
                <input
                  aria-label="TextB by article title"
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
                  aria-label="Add your comment in this text holder"
                  className="form-control"
                  id="msg"
                  rows="6"
                  ref={inputRef}
                ></textarea>
                <br />
                <button
                  aria-label="Button to post comment"
                  className="btn btn-primary btn-block mb-2"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
