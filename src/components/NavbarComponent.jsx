import { Nav, Container, Navbar, Image } from 'react-bootstrap';

const NavbarComponent = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MyPortofolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skill">Skill</Nav.Link>
            <Nav.Link href="#award">Award</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavbarComponent;