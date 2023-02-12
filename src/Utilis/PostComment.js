import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://adel-news-db.onrender.com/api/",
});

export default function postComment(dataBody,author,article_id){
     const postartecle = 
      [{
        username: author,
        body: dataBody,
        // article_id:article_id,
      },];
      
 console.log(dataBody,author,article_id);
  return articlesAPI
    .post(`/articles/${article_id}/comments`, postartecle)
    .then(({ data }) => {

     console.log(data);
      return data;
    });
};
