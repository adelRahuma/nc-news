import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export const getArticles = () => {
  return articlesAPI.get("/articles").then(({ data }) => {
       return data;
  });
};



