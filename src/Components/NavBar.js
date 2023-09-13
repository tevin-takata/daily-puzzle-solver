import '../App.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Honeycomb from '../Pages/Honeycomb';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <header>THE DAILY PUZZLE SOLVER</header>
      </Navbar.Brand>
      <Container fluid className="d-flex subhead justify-content-center">
        <Nav id="nav-links" className="d-flex align-content-center">
          <Link id="subhead-links" to="/honeycomb">Honeycomb</Link>
          <Link id="subhead-links" to="/nineletter">Nine Letter</Link>
          <Link id="subhead-links" to="/letterbox">Letter box</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;