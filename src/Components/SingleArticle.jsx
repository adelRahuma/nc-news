import React,{useState} from 'react';


export default function SingleArticle({articlesCom}) {
    const [commentvisble, setCommentVisble] = useState(false);
  return (
    <>
    <button
    className="btn btn-primary"
    onClick={() => {
      setCommentVisble((currState) => !currState);
    }}
  >
    Show Comments
  </button>
  {commentvisble === true ? (
    <>
      <h6>Click to Hide</h6>
      {articlesCom.map((comment) => (
        <div key={comment.comment_id}>
          <ul
            style={{
              padding: "10px",
              backgroundColor: "#E5E4E2",
              textAlign: "left",
              boxShadow: "7px 2px 10px 2px #6F6F6F",
            }}
          >
            <li>{comment.body}</li>
            <li style={{ fontWeight: "bold", textAlign: "center" }}>
              {comment.author}
            </li>
          </ul>
        </div>
      ))}
    </>
  ) : null}
  </>
  )
}
