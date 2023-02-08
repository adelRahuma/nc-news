import React, { useEffect, useState } from "react";
import { getArticlesWithComments } from "../Utilis/getArticleById";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
 import {useLocation} from 'react-router-dom'
import { logDOM } from "@testing-library/react";
export default function ArticleWithComments() {
 const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { article_id } = location.state;
 
  useEffect(() => {
    
    getArticlesWithComments(article_id).then((data) => {
      setArticles(data);
      setLoading(true);
    });
  }, []);
  console.log(articles)
  if (!loading) {
    return <h3>Loading...</h3>;
  }
  return <div>ArticleWithComments</div>;
}
