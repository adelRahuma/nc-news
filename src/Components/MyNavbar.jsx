import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo512 from "../images/logo512.png";

function MyNavbar() {
  const showUserName = false;

  return (
    <>
      <Navbar expand="xl" bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="#" className="Brand">
            Nc Recent News
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="Link" to="/Articles">
              Articles
            </Link>
            <Link className="Link" to="/Comments">
              Comments
            </Link>
            <Link className="Link" to="/Topics">
              Topics
            </Link>
            {showUserName ? <p>show</p> : null}
            <img id="img" src={logo512} />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
