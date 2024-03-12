import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//components fot this APP

const Navba = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
      </Navbar>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Price</Nav.Link>
            <Nav.Link href="#pricing">Description</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    
  );

};

export default Navba;
