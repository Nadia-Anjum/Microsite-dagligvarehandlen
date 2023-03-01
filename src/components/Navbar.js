import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/daglivaren-logo.png";
import "../styling/Navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg">
        <Container className="navbarContainer">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="110"
              height="72"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
            <Nav className="me-auto navlinkA">
              <NavLink to="/" as={Link}>
                Forside
              </NavLink>
              <NavLink to="/PageTwo" as={Link}>
                Forbrugere
              </NavLink>
              <NavLink to="/PageThree" as={Link}>
              Levandører
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
