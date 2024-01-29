import {
  Container, Row, Col, Navbar, Nav,
  NavbarBrand, NavLink, NavItem
} from 'reactstrap';

const LOGO = '/gunnarroas-logo.png';

export const Header = () => (
 <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
        <Row className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={LOGO} alt="gunnarro:as" style={{ width: 250 }} />
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/about">About</NavLink>
              </NavItem>

               <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/todo">Todo</NavLink>
               </NavItem>

            </Nav>
          </Col>
        </Row>
    </Navbar>
)