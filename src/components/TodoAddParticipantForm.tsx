// react import
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { AlertBox } from '../components/Alert';
// service import
import { TodoServiceApiFactory, ParticipantDto, ErrorResponse, Configuration } from "../generated/client/todoservice";

export const TodoAddParticipantForm = () => {
    const { t } = useTranslation();
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };
    const navigate = useNavigate();
    const navigateTodos = () => {
       //navigate('/todos');
       navigate(-1); // same as browser back button
    };

    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [participantForm, setParticipantForm] = useState({
        todoId: todoId,
        name: '' as string,
        email: '' as string,
        enabled: 0 as number,
    });

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParticipantForm({
          ...participantForm,
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
            // map from form data into todo api model
            const participantDto : ParticipantDto = {
                  todoId: participantForm.todoId,
                  name: participantForm.name,
                  email: participantForm.email,
                  enabled: participantForm.enabled,
            };

            const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

            todoApi.createParticipant(participantForm.todoId, participantDto)
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
  <div className="m-4 w-50 mx-auto">
    {formErrors && <AlertBox title={t("applicationErrorTitle")} message={formErrors} />}
    <Card>
     <Card.Header>
        <Card.Title>{t("addParticipantFormTitle")}</Card.Title>
     </Card.Header>
     <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
           <Form.Group controlId="validationName">
              <Form.FloatingLabel controlId="name" label={t("name")} className="mb-3">
                  <Form.Control
                    required
                    id="name"
                    type="text"
                    value={participantForm.name}
                    onChange={handleFieldChange}
                    isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(participantForm.name)}
                  />
                  <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
              </Form.FloatingLabel>
           </Form.Group>
           <Form.Group controlId="validationEmail">
              <Form.FloatingLabel controlId="email" label={t("email")} className="mb-3">
                  <Form.Control
                    id="email"
                    type="text"
                    value={participantForm.email}
                    onChange={handleFieldChange}
                    isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(participantForm.email)}
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
  );
}