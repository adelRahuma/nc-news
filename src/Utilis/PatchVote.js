import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export const upateCommentVotes = (articleId, value) => {
  return articlesAPI.patch(`/articles/${articleId}`, { inc_votes: value });
};
