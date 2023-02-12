import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { getTopics } from "../Utilis/FetchData";
import { getArticlesCat } from "../Utilis/getArticleById";
import { v4 as uuidv4 } from "uuid";
import Reusable from "./Reusable";
export default function Topics() {
  const [topics, setTopics] = useState([]);
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
        <div className="row">
          {topics.map((item, ndx) => (
            <div className="col-3" key={item}>
              <button
                type="button"
                className="btn btn-success"
                onClick={(event) => {
                  getArticlesCat(item).then((data) => {
                    setCatagory(data);
                  });

                  catagory.map((list) => (
                    <ul key={uuidv4()}>
                      <li>{list.title}</li>
                    </ul>
                  ));
                  console.log(catagory);
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <h3>{topics[1]}</h3>
      {topics.map((item) => (
        <ul key={item}>
          <li style={{ backgroundColor: "grey" }}>
            <a
              href="#"
             
            >
              <button  onClick={(event) => {
                console.log(event.target.dispatchEvent.name);
                getArticlesCat(item).then((data) =>{ setCatagory(data)
                
                });
              }}></button>{item}
            </a>
          </li>
          {/* <Reusable catagory={catagory}/> */}
      {/* <div>
            {catagory.map((list) => (
              <ul key={uuidv4()}>
                <li>{list.title}</li>
              </ul>
            ))}
          </div>
        </ul>
      ))} */}
    </>
  );
}
