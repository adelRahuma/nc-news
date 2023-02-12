import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Reusable({ catagory }) {
  return (
    <div className="container" style={{padding:"12px", backgroundColor: "#F5FFFA" }}>
      {catagory[0].map((list,i) => (
        <div key={uuidv4()}>
          <ul 
          
          style={{
            padding: "12px",
            backgroundColor: "#E5E4E2",
            textAlign: "left",
            boxShadow: "7px 2px 10px 2px #BCC6CC",
          }}
          >
            <li>{list.topic}</li>
            <li
              style={{
                color: "black",
                textAlign: "left",
              }}
            >
              {list.body}
            </li>
            <li
              style={{
                color: "black",
                textAlign: "left",
              }}
            >
              {list.created_at}
            </li>
            <li
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {list.topic}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
// ///////////////////////

// import React,{useState} from 'react';

// export default function SingleArticle({articlesCom}) {
//     const [commentvisble, setCommentVisble] = useState(false);
//   return (
//     <>
//     <button
//     className="btn btn-primary"
//     onClick={() => {
//       setCommentVisble((currState) => !currState);
//     }}
//   >
//     Show Comments
//   </button>
//   {commentvisble === true ? (
//     <>
//       <h6>Click to Hide</h6>
//       {articlesCom.map((comment) => (
//         <div key={comment.comment_id}>
//           <ul
//             style={{
//               padding: "10px",
//               backgroundColor: "#E5E4E2",
//               textAlign: "left",
//               boxShadow: "7px 2px 10px 2px #6F6F6F",
//             }}
//           >
//             <li>{comment.body}</li>
//             <li style={{ fontWeight: "bold", textAlign: "center" }}>
//               {comment.author}
//             </li>
//           </ul>
//         </div>
//       ))}
//     </>
//   ) : null}
//   </>
//   )
// }

// ////////////////////
