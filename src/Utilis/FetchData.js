import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export const getArticles = () => {
  return articlesAPI.get("/articles").then(({ data }) => {
    return data;
  });
};

export default function getUsers() {
  return articlesAPI.get("/users").then(({ data }) => {
    return data;
  });
}

export function getTopics() {
  return articlesAPI
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
}
