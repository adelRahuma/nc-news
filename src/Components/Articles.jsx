import { useParams } from "@testing-library/react";
import React, { useEffect, useState } from "react";
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
      <div
        className="row row border border-dark"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="col-1">ID</div>
        <div className="col-2">Title</div>
        <div className="col-2">Topic</div>
        <div className="col-2">Author</div>
        <div className="col-4">Body</div>
        <div className="col-1">Votes</div>
      </div>
      {articles.map((list) => (
        <div
          className="row row border border-dark"
          style={{ padding: "6px" }}
          key={uuidv4()}
        >
          <div className="col-1">{list.article_id}</div>
          <div className="col-2">{list.title}</div>
          <div className="col-2">{list.topic}</div>
          <div className="col-2">{list.author}</div>
          <div className="col-4">{list.body}</div>
          <div className="col-1">{list.votes}</div>
        </div>
      ))}
    </div>
  );
}
