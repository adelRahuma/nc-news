import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export const getArticleById = (article_id) => {
  return articlesAPI
    .get(`/articles?article_id=${article_id}`)
    .then(({ data }) => {
      return data;
    });
};

export const getArticlesWithComments = (article_id) => {
  return articlesAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};


