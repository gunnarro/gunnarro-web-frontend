// react import
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
import { TodoServiceApiFactory, TodoDto, TodoDtoStatusEnum, ErrorResponse, Configuration } from "../generated/client/todoservice";

export const TodoForm = () => {

    const { t } = useTranslation()

    const navigate = useNavigate();
    const navigateTodos = () => {
       //navigate('/todos');
       navigate(-1); // same as browser back button
    };

    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [todoForm, setTodoForm] = useState({
        created_by: '',
        name: '',
        description: '',
        status: 'OPEN',
    });

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoForm({
          ...todoForm,
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
            const todoDto : TodoDto = {
                  createdByUser: todoForm.created_by,
                  lastModifiedByUser: todoForm.created_by,
                  name: todoForm.name,
                  description: todoForm.description,
                  status: TodoDtoStatusEnum.Open,
            };

            const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

            todoApi.createTodo(todoDto)
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
        <Card.Title>{t("todoFormTitle")}</Card.Title>
     </Card.Header>
     <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
           <Form.Group controlId="validationCreatedBy">
              <Form.FloatingLabel controlId="created_by" label={t("createdBy")} className="mb-3">
                  <Form.Control
                    autoFocus
                    required
                    id="created_by"
                    type="text"
                    placeholder={todoForm.created_by}
                    onChange={handleFieldChange}
                    isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoForm.created_by)}
                  />
                  <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
              </Form.FloatingLabel>
           </Form.Group>
           <Form.Group controlId="validationName">
              <Form.FloatingLabel controlId="name" label={t("name")} className="mb-3">
                  <Form.Control
                    required
                    id="name"
                    type="text"
                    placeholder={todoForm.name}
                    onChange={handleFieldChange}
                    isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoForm.name)}
                  />
                  <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
              </Form.FloatingLabel>
           </Form.Group>
           <Form.Group controlId="validationDescription">
              <Form.FloatingLabel controlId="description" label={t("description")} className="mb-3">
                  <Form.Control
                    id="description"
                    type="text"
                    placeholder={todoForm.description}
                    onChange={handleFieldChange}
                    isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoForm.description)}
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