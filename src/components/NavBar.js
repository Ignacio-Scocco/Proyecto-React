
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from './CartWidget';
function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Tienda de deportes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Us">Nosotros</Nav.Link>
                <Nav.Link href="#Contact">Contacto</Nav.Link>
                <Nav.Link href="#Product">Productos</Nav.Link>
            </Nav>
            <li className='iconCart'>
                <CartIcon/>
            </li>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;