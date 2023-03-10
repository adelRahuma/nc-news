import React, { useEffect, useState } from "react";
import {
  getArticleById,
  getArticlesWithComments,
} from "../Utilis/getArticleById";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import "react-bootstrap";

import { upateCommentVotes } from "../Utilis/PatchVote";
import SingleArticle from "./SingleArticle";

import { useNavigate, Link } from "react-router-dom";

//import { useNavigate } from "react-router-dom";

export default function ArticleById() {
  const [articles, setArticles] = useState([]);
  const [articlesCom, setArticlesCom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [votesNo, setVotesNo] = useState(0);
  const { article_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    Promise.all([
      getArticleById(article_id),
      getArticlesWithComments(article_id),
    ]).then(([getArticleById, getArticlesWithComments]) => {
      setArticles(getArticleById);
      setArticlesCom(getArticlesWithComments);
      setLoading(true);
    });
  }, [article_id, articlesCom, votesNo]);

  if (!loading) {
    return <h3>Loading...</h3>;
  }
  const handleChange = (value) => {
    setVotesNo((currChange) => currChange + value);
    upateCommentVotes(article_id, value);
  };

  return (
    <>
      <div className="container p-5 my-2 bg-dark text-black">
        <div className="row">
          <h4 aria-label="Header" style={{ color: "white" }}>
            {articles[0].title}
          </h4>
          <br />
        </div>

        <div
          className="row"
          style={{
            padding: "10px",
            backgroundColor: "#d6e8d6",
            boxShadow: "7px 2px 10px 2px #7fecad",
          }}
        >
          <div
            className="col-6"
            style={{
              height: "50%",
              padding: "10px",
              textAlign: "justify",
              backgroundColor: "hsl(183, 70%, 73%)",
              boxShadow: "7px 2px 10px 2px #6F6F6F",
            }}
          >
            <p aria-label="Paragraph body">{articles[0].body}</p>
            <button
              className="btn btn-outline-primary"
              onClick={(e) => {
                navigate("/Comments", { state: { articles } });
              }}
            >
              Comment
            </button>
          </div>

          <div className="col-6">
            <img
              aria-label="image explaines the paragraph"
              className="rounded-circle"
              src={articles[0].article_img_url}
              style={{
                height: "100%",
                padding: "20px",
                maxWidth: "300px",
                boxShadow: "7px 2px 10px 2px #6F6F6F",
              }}
              alt={articles[0].title}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#686A6C",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-success px-2 me-2"
            disabled={votesNo === 1}
            onClick={() => handleChange(1)}
          >
            <i className="fas fa-plus"></i>+
          </button>
          {"Votes " + articles[0].votes}
          <button
            type="button"
            className="btn btn-danger px-2 ms-2"
            disabled={votesNo === -1}
            onClick={() => handleChange(-1)}
          >
            <i className="fas fa-minus"></i>-
          </button>
        </div>
      </div>

      <SingleArticle articlesCom={articlesCom} />

      {/* <button
        aria-label="Button show comments"
        className="btn btn-primary"
        onClick={() => {
          setCommentVisble((currState) => !currState);
        }}
      >
        Show Comments
      </button>
      {commentvisble === true ? (
        <>
          <h6>Click to Hide</h6>
          {articlesCom.map((comment) => (
            <div key={comment.comment_id}>
              <ul
                aria-label="List of the comments"
                style={{
                  padding: "10px",
                  backgroundColor: "#E5E4E2",
                  textAlign: "left",
                  boxShadow: "7px 2px 10px 2px #6F6F6F",
                }}
              >
                <li>{comment.body}</li>
                <li style={{ fontWeight: "bold", textAlign: "center" }}>
                  {comment.author}
                </li>
              </ul>
            </div>
          ))}
        </>
      ) : null} */}
    </>
  );
}
