import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MyNavbar from "./Components/MyNavbar";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import Comments from "./Components/Comments";
import ArticleWithComments from './Components/ArticleWithCo'
import ArticleById from "./Components/ArticleById";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/Articles" element={<Articles />}></Route>
        {/* <Route path="/ArticleWithComments" element={<ArticleWithComments />}></Route> */}
        <Route path="/Topics" element={<Topics />}></Route>
        <Route path="/Comments" element={<Comments />}></Route>
        <Route path="/ArticleById/:article_id" element={<ArticleById />}></Route>
      </Routes>
    </div>
  );
}

export default App;
