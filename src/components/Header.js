import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

export const Header = () => (
<Navbar className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ height: 80 }}>
     <NavbarBrand href="/">
          <img alt="gunnarro:as" src="/gunnarro-as-40.png"
            style={{
              height: 40,
              width: 250
            }}
          />
     </NavbarBrand>
     <Nav className="me-auto" navbar>
       <NavItem>
         <NavLink href="/">Home</NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="/employees">Employees</NavLink>
         </NavItem>
       <NavItem>
         <NavLink href="/todo">Todo</NavLink>
       </NavItem>
        <NavItem>
         <NavLink href="/todonew">Todo new</NavLink>
         </NavItem>
       <NavItem>
         <NavLink href="/about">About</NavLink>
       </NavItem>
     </Nav>
     <NavbarText>1.0.0-SNAPSHOT</NavbarText>
</Navbar>
)