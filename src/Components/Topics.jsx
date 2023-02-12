import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { getTopics } from "../Utilis/FetchData";
import { getArticlesCat } from "../Utilis/getArticleById";
 
import { v4 as uuidv4 } from "uuid";
import Reusable from "./Reusable";
import ReactDOM from 'react-dom/client';
export default function Topics() {
  const [topics, setTopics] = useState([]);
  const showTopics = false;
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    getTopics().then((data) => {
      const topic = data.map((item) => item.slug);
      setTopics(topic);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row py-md-3">
          {topics.map((item) => (
            <div className="col-3" key={item}>
              <button
                type="button"
                className="btn btn-success"
                onClick={(event) => {
                  getArticlesCat(item).then((data) => {
                    setCatagory((currData) => [data]);
                  });
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {catagory.length >= 1 ? <Reusable catagory={catagory} /> : null}
    </>
  );
}
 
