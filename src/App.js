import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MyNavbar from "./Components/MyNavbar";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import Comments from "./Components/Comments";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button type="button" className="btn btn-danger">tttttt</button>
      <MyNavbar />
      <Routes>
        <Route path="/Articles" element={<Articles />}></Route>
        <Route path="/Topics" element={<Topics />}></Route>
        <Route path="/Comments" element={<Comments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
