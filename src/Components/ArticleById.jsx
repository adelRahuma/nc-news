import React, { useEffect, useState } from "react";
import { getArticleById } from "../Utilis/getArticleById";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function ArticleById() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticles(data);
      setLoading(true);
    });
  }, []);
  if (!loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="container">
      <div className="row">
        <h4>Article_id= {articles[0].article_id}</h4>
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
        <p>{articles[0].title}</p>
        <div
          style={{
            padding: "10px",
            backgroundColor: "grey",
            boxShadow: "7px 2px 10px 2px #1c87c9",
          }}
        >
          <p>{articles[0].body}</p>
        </div>
        <div className="col md-6">
          <img
            src={articles[0].article_img_url}
            style={{ padding: "20px", maxWidth: "300px" }}
            alt={articles[0].title}
          />
        </div>
      </div>
    </div>
  );
}
