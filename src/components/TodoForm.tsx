// react import
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
import { TodoServiceApiFactory, TodoDto, ErrorResponse, Configuration } from "../api";

export const TodoForm = () => {
    const navigate = useNavigate();
    const navigateTodos = () => {
       //navigate('/todos');
       navigate(-1); // same as browser back button
    };

    const [error, setError] = useState("");
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
        setError("")
        // Check form input
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
         } else {
            // map form data to todo API model
            const todoData = JSON.stringify({
                  createdByUser: todoForm.created_by,
                  lastModifiedByUser: todoForm.created_by,
                  name: todoForm.name,
                  description: todoForm.description,
                  status: todoForm.status
            });
            // new send data

            const todoDto : TodoDto = {
                  createdByUser: todoForm.created_by,
                  lastModifiedByUser: todoForm.created_by,
                  name: todoForm.name,
                  description: todoForm.description,
                  status: todoForm.status,
            };

            const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

                todoApi.createTodo(todoDto)
                    .then((response) => navigateTodos())
                    .catch(function (error) {
                         if (error.response && error.response.headers["content-type"] == 'application/json') {
                            setError(error.response.data["description"]);
                        } else {
                            setError(error.message);
                        }
                    });

            // send data
            /*
             TodoRestApi.post("/todos", todoData)
               .then((response) => navigateTodos())
               .catch(function (error) {
                     if (error.response && error.response.headers["content-type"] == 'application/json') {
                        setError(error.response.data["description"]);
                    } else {
                        setError(error.message);
                    }
               });*/
         }
         setValidated(true);
    }

  let validationErrorMsg = "Please enter a valid username (alphanumeric characters only).";

  return (
  <div className="m-4">
    {error && <AlertBox message={error} />}
    <Card>
     <Card.Header>
        <Card.Title>New Todo task</Card.Title>
     </Card.Header>
     <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
           <Form.Group controlId="validationCreatedBy">
              <Form.FloatingLabel controlId="created_by" label="created by" className="mb-3">
              <Form.Control
                autoFocus
                required
                id="created_by"
                type="text"
                placeholder={todoForm.created_by}
                onChange={handleFieldChange}
                isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoForm.created_by)}
              />
              </Form.FloatingLabel>
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
           </Form.Group>
           <Form.Group controlId="validationName">
              <Form.FloatingLabel controlId="name" label="name" className="mb-3">
              <Form.Control
                required
                id="name"
                type="text"
                placeholder={todoForm.name}
                onChange={handleFieldChange}
                isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoForm.name)}
              />
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
              </Form.FloatingLabel>
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
           </Form.Group>
           <Form.Group controlId="validationDescription">
              <Form.FloatingLabel controlId="description" label="description" className="mb-3">
              <Form.Control
                id="description"
                type="text"
                placeholder={todoForm.description}
                onChange={handleFieldChange}
              />
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
              </Form.FloatingLabel>
              <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
           </Form.Group>
           <Form.Group>
              <div className="float-end">
                <Button onClick={() => navigateTodos()} className="m-1" variant="outline-secondary" >Cancel</Button>
                <Button type="submit" className="" variant="outline-primary" >Save</Button>
              </div>
           </Form.Group>
        </Form>
     </Card.Body>
    </Card>
  </div>
  );
}