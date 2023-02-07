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
        <p>Article_id :{articles[0].article_id}</p>
        <p>Article_Title :{articles[0].title}</p>
        <p>Article_Topic :{articles[0].topic}</p>
        <p>Article_Author :{articles[0].author}</p>
        <p className="">Article_Votes :{articles[0].votes}</p>
        <div>
          <img
            src={articles[0].article_img_url}
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
