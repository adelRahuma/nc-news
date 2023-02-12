import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function Reusable(catagory) {
  return (
    <div>
            {catagory.map((list) => (
              <ul key={uuidv4()}>
                <li>{list.title}</li>
              </ul>
            ))}
          </div>
  )
}
