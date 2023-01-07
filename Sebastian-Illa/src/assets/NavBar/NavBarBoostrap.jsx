import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { Cartwidget } from '../Carrito/CartWidget';

function NavBarBoostrap() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to= "/">INICIO</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='btn btn-outline-primary'  to="/category/Categoria1">Categoria 1</NavLink>
            <NavLink className='btn btn-outline-primary' to="/category/Categoria2">Categoria 2</NavLink>
          </Nav>
          <Nav>
            <Link className='btn btn-outline-primary' to= "/cart">
              <Cartwidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoostrap;