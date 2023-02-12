import { logDOM } from "@testing-library/react";
import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export default function postComment(dataBody, author, article_id) {
  const postartecle = [
    {
      username: author,
      body: dataBody,
    },
  ];

  return articlesAPI
    .post(`/articles/${article_id}/comments`, postartecle)
    .then(({ data }) => {
      return data;
    });
}
