import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AlertBox } from '../components/Alert';

export const Login = () => {

    const { t } = useTranslation()

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };

    function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // clear all previous error
        setError("")
        // mock
        setError("loginErrorMsg")
    }

    return (
        <div className="m-4 w-25 mx-auto">
            <Card className="border-0">
               {error && <AlertBox title="login failed" message={error} />}
               <Form noValidate onSubmit={handleFormSubmit}>
                  <Form.Group controlId="validationUserName">
                     <Form.FloatingLabel controlId="user_name" label={t("userName")} className="mb-3">
                     <Form.Control
                       autoFocus
                       required
                       id="user_name"
                       type="text"
                       placeholder=""
                     />
                     </Form.FloatingLabel>
                  </Form.Group>
                  <Form.Group controlId="validationPassword">
                     <Form.FloatingLabel controlId="password" label={t("password")} className="mb-3">
                     <Form.Control
                       required
                       id="password"
                       type="text"
                       placeholder=""
                     />
                     </Form.FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                    <Form.Check // prettier-ignore
                           type="switch"
                           id="custom-switch"
                           label={t("rememberMe")}
                         />
                     <div className="float-end">
                       <Button onClick={() => navigateHome()} className="m-1" variant="outline-secondary" >{t("cancel")}</Button>
                       <Button type="submit" className="" variant="outline-primary" >{t("login")}</Button>
                     </div>
                  </Form.Group>
               </Form>
            </Card>
         </div>
  )
}