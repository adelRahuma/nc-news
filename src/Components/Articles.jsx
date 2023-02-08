import { useParams } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import { getArticles } from "../Utilis/FetchData";
import { v4 as uuidv4 } from "uuid";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles().then((data) => {
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
        <h4>List of Articles</h4>
        <br />
      </div>
     
      {articles.map((list) => (
        <div key={uuidv4()}>
          <div
            className="row"
            style={{
              padding: "10px",
              backgroundColor: "#d6e8d6",
              boxShadow: "7px 2px 10px 2px #7fecad",
            }}
          >
          <Link to={"/ArticleById/"+`${list.article_id}`}> <div className="col-1">{list.article_id}</div></Link>
            <div className="col-4">{list.title}</div>
            <div className="col-2">{list.topic}</div>
            <div className="col-2">{list.author}</div>
            <div className="col-2">
              <img src={list.article_img_url} style={{ maxWidth: "100px" }} />
            </div>
            <div className="col-1">{list.votes}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
