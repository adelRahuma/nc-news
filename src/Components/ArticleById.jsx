import React, { useEffect, useState } from "react";
import {
  getArticleById,
  getArticlesWithComments,
} from "../Utilis/getArticleById";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function ArticleById() {
  const [commentvisble, setCommentVisble] = useState(false);
  const [articles, setArticles] = useState([]);
  const [articlesCom, setArticlesCom] = useState([]);
  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();
  useEffect(() => {
    Promise.all([
      getArticleById(article_id),
      getArticlesWithComments(article_id),
    ]).then(([getArticleById, getArticlesWithComments]) => {
      setArticles(getArticleById);
      setArticlesCom(getArticlesWithComments);
      setLoading(true);
    });
  }, [article_id]);

  if (!loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div className="container p-5 my-2 bg-dark text-black">
        <div className="row">
          <h4 style={{ color: "white" }}>{articles[0].title}</h4>
          <br />
        </div>

        <div
          key={uuidv4()}
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
            <p>{articles[0].body}</p>
          </div>

          <div className="col-6">
            <img
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
      </div>
      <button
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
      ) : null}
    </>
  );
}
