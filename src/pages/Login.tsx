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
    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToTodoList = () => {
        navigate('/todos');
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

                      console.log("login user=" + userDto.userName + ", " + userDto.password);
                      todoApi.login(999, userDto)
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
        <div className="m-4 w-25 mx-auto">
            <Card className="border-0">
               {error && <AlertBox title="login failed" message={error} />}
               <Form noValidate onSubmit={handleFormSubmit}>
                  <Form.Group>
                     <Form.FloatingLabel label={t("userName")} className="mb-3">
                     <Form.Control
                       autoFocus
                       required
                       id="userName"
                       type="text"
                       placeholder=""
                     />
                     </Form.FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                     <Form.FloatingLabel label={t("password")} className="mb-3">
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
                       <Button onClick={() => navigateToHome()} className="m-1" variant="outline-secondary" >{t("cancel")}</Button>
                       <Button type="submit" variant="outline-primary" >{t("login")}</Button>
                     </div>
                  </Form.Group>
                  <Button type="submit" variant="outline-primary" >{t("registerUser")}</Button>
               </Form>
            </Card>
         </div>
  )
}