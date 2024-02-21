import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Header = () => (
<Navbar className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between" style={{ height: 80 }}>
    <Container>
         <Navbar.Brand href="/">
              <img alt="gunnarro:as" src="/gunnarro-as-40.png"
                style={{
                  height: 40,
                  width: 250
                }}
              />
         </Navbar.Brand>
         <Nav className="me-auto" navbar>
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/employees">Employees</Nav.Link>
             <Nav.Link href="/todo">Todo</Nav.Link>
             <Nav.Link href="/about">About</Nav.Link>
         </Nav>
         <Navbar.Text className="mr-sm-2">1.0.0-SNAPSHOT</Navbar.Text>
     </Container>
</Navbar>
)