import { useTranslation } from "react-i18next";
// react bootstrap import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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
             <Nav.Link href="/todo">{t('todo')}</Nav.Link>
             <Nav.Link href="/about">{t('about')}</Nav.Link>
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
        </Container>
    </Navbar>
 );
}