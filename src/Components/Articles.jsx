import { useParams } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import { getArticles } from "../Utilis/FetchData";
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [key,setKeys]=useState([])
  let fields='';

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
        <div className="col-4"> </div>
        
        <div className="col-4"><h4>List of Articles</h4></div>
        <div className="col-4"> 
        <h5>Sort By </h5>
        {/* //
        <select onChange={handleCategoryChange}>
        <option value="selected"> Select a category </option>
        {category.map((cat) => (
          <option key={cat.category_name} value={cat.categories}>
           
          </option>
        ))}
      </select>

        /// */}
        {   fields= Object.keys(articles[0])}
       
        <Form.Select aria-label="select field to sort By">
        <option value="selected"> Select a category </option>
        {fields.map(field=>(
     
      <option key={field} value={field}>
         {field}
        </option>
      
        ))} 
        </Form.Select>
        </div>
       
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
            <Link className="col-6" to={"/ArticleById/" + `${list.article_id}`}>
              {list.title}
            </Link>
            <div className="col-2">{list.topic}</div>
            <div className="col-2">{list.author}</div>
            <div className="col-2">
              <img src={list.article_img_url} style={{ maxWidth: "100px" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
