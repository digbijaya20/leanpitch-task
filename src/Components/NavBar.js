
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import logo from '../Assets/logo.png';
const NavBar = ()=>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
    {/* <Container> */}
    <Navbar.Brand href="#home" className="logoContainer">
        <img src={logo} className="logoImage" alt={"logo"}/>
       <h2>Leanpitch</h2>
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    
      <Button variant="danger" className="btnStyle" size="lg">Subscribe</Button>{' '}
      <Button variant="dark"  size="lg">Contact Us</Button>
      
    </Navbar.Collapse>
    {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    {/* </Container> */}
  </Navbar>
        </>
    )
}

export default NavBar;