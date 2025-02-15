import { useTranslation } from "react-i18next";
// react bootstrap import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
// project import
import { LANGUAGES } from "../constants";

export const Header = () => {
 const { i18n, t } = useTranslation();

 const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
     const lang_code = e.target.value;
     i18n.changeLanguage(lang_code);
   };

 return (
    <Navbar expand="lg" className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between" style={{ height: 80 }}>
     <Container>
         <Navbar.Brand href="/">
              <img alt="gunnarro:as" src="/gunnarro-as-40.png"
                style={{
                  height: 40,
                  width: 250
                }}
              />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto" navbar>
                 <Nav.Link href="/">{t('home')}</Nav.Link>
                 <Nav.Link href="/employees">{t('employees')}</Nav.Link>
                 <NavDropdown title={t('products')} id="basic-nav-dropdown">
                   <NavDropdown.Item href="/todo">{t('todo')}</NavDropdown.Item>
                   <NavDropdown.Item href="/todo/admin">{t('todoAdmin')}</NavDropdown.Item>
                   <NavDropdown.Item href="/tournament-planner" disabled >{t('tournamentPlanner')}</NavDropdown.Item>
                 </NavDropdown>
                 <NavDropdown title={t('about')} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about/gender-equality-plan">{t('genderEqualityPlan')}</NavDropdown.Item>
                    <NavDropdown.Item href="/about/hms-pLan">{t('hmsPlan')}</NavDropdown.Item>
                    <NavDropdown.Item href="/about/about">{t('about')}</NavDropdown.Item>
                 </NavDropdown>
             </Nav>
             <div className="bg-secondary">
                 <Form.Select className="form-select bg-secondary" size="sm" defaultValue={i18n.language} onChange={onChangeLang} >
                   {LANGUAGES.map(({ code, label }) => (
                      <option key={code} value={code}>
                        {label}
                      </option>
                    ))}
                 </Form.Select>
             </div>
         </Navbar.Collapse>
         <div className="ms-5">
           <h3><Badge bg="success">{process.env.ENVIRONMENT}</Badge></h3>
         </div>
        </Container>
    </Navbar>
 );
}