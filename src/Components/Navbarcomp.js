import {Navbar, Nav , Container} from 'react-bootstrap'


const Navbarcomp = () => {
    return (
        <>
    
        
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Roadmap</Nav.Link>
            <Nav.Link href="#pricing">Interview</Nav.Link>
            <Nav.Link href="#pricing">Updates</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
        <br />
      
      </>
    )
}

export default Navbarcomp
