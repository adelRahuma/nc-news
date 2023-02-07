import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar  expand="xl" bg="primary" variant="light">
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
