// react import
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { AlertBox } from '../components/Alert';
// service import
import { AdminServiceApiFactory } from "../generated/client/adminservice/api/admin-service-api";
import { Configuration } from "../generated/client/adminservice/configuration";
import { UserDto } from "../generated/client/adminservice/model";

export const RegisterUser = () => {

    const { t } = useTranslation()

    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [registerUserForm, setRegisterUserForm] = useState({
        userName: '',
        email: '',
        password: '',
        enabled: true,
    });

    const navigate = useNavigate();
    const navigateTodos = () => {
        navigate('/login');
    };

     const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterUserForm({
          ...registerUserForm,
          [event.target.id]: event.target.value,
        });
     };

    function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
       event.preventDefault();
              // clear all previous error
              setFormErrors("")
              // Check form input
              const form = event.currentTarget;
              if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
               } else {
                  // send data
                  // map from form data into api todoDto model
                  const userDto : UserDto = {
                        userName: registerUserForm.userName,
                        email: registerUserForm.email,
                        //password: todoForm.name,
                        enabled: registerUserForm.enabled
                  };

                  const todoApi = AdminServiceApiFactory(new Configuration(), "", TodoRestApi);

                  console.log("register user=" + userDto.userName + ", " + userDto.email + ", " + userDto.enabled);
                  todoApi.createUser(999, userDto)
                      .then((response) => navigateTodos())
                      .catch(function (error) {
                           if (error.response && error.response.headers["content-type"] == 'application/json') {
                              setFormErrors(error.response.data["description"]);
                          } else {
                              setFormErrors(error.message);
                          }
                      });
               }
               setValidated(true);
    }

    return (
        <div className="m-2 w-50 mx-auto">
            {formErrors && <AlertBox title={t("applicationErrorTitle")} message={formErrors} />}
            <Card>
             <Card.Header>
                <Card.Title>{t("registerUserTitle")}</Card.Title>
             </Card.Header>
             <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                   <Form.Group>
                      <Form.FloatingLabel label={t("userName")} className="mb-3">
                          <Form.Control
                            autoFocus
                            required
                            id="userName"
                            type="text"
                            value={registerUserForm.userName}
                            onChange={handleFieldChange}
                            isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(registerUserForm.userName)}
                          />
                          <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                   </Form.Group>
                   <Form.Group>
                      <Form.FloatingLabel label={t("email")} className="mb-3">
                          <Form.Control
                            required
                            id="email"
                            type="text"
                            value={registerUserForm.email}
                            onChange={handleFieldChange}
                            isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(registerUserForm.email)}
                          />
                          <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                   </Form.Group>
                    <Form.Group>
                      <Form.FloatingLabel label={t("password")} className="mb-3">
                         <Form.Control
                           required
                           id="password"
                           type="text"
                           value={registerUserForm.password}
                           onChange={handleFieldChange}
                           isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(registerUserForm.password)}
                         />
                         <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                  </Form.Group>
                   <Form.Group>
                      <div className="float-end">
                        <Button onClick={() => navigateTodos()} className="m-1" variant="outline-secondary" >{t("cancel")}</Button>
                        <Button type="submit" className="" variant="outline-primary" >{t("save")}</Button>
                      </div>
                   </Form.Group>
                </Form>
             </Card.Body>
            </Card>
        </div>
  )
}