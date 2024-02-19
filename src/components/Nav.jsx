import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Nav.css'

function BasicExample() {
  const currentPage = useLocation().pathname;
  return (
    <Navbar expand="lg" className="bg-gradient">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-3">
            <Nav.Link href="/" className={currentPage === '/'? 'active' : ''}>About me</Nav.Link>
            <Nav.Link href="/Portfolio" className={currentPage === '/Portfolio'? 'active ' : ''}>Portfolio</Nav.Link>
            <Nav.Link href="/Contact" className={currentPage === '/Contact'? 'active ' : ''}>Contact me</Nav.Link>
            <Nav.Link href="/Resume" className={currentPage === '/Resume'? 'active ' : ''}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;