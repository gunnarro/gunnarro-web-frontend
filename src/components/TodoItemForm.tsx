import React, { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
// project import
import { TodoRestApi } from '../services/TodoRestApi';

interface TodoItemFormProps {
  userName: string;
}

export const TodoItemForm: React.FC<TodoItemFormProps> = (props) => {
    // the todoId is provided through the uri.
    const { todoId } = useParams();
    const navigate = useNavigate();
    const navigateTodoItems = () => {
           //navigate('/todos');
           navigate(-1); // same as browser back button
        };
    // form constants
    const [validated, setValidated] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [form, setForm] = useState({
        todoId: todoId,
        created_by: props.userName,
        name: '',
        description: '',
        action: '',
        status: 'OPEN',
        assigned_to: '',
      });

     const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value,
        });
     };

    function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // map form data to todo API model
        const todoItemData = JSON.stringify({
              createdByUser: form.created_by,
              lastModifiedByUser: form.created_by,
              todoId: form.todoId,
              name: form.name,
              description: form.description,
              action: form.action,
              assignedTo: form.assigned_to,
              status: form.status
        });
        // send data
         TodoRestApi.post("/todos/" + todoId + "/items", todoItemData)
            .then((response) => navigateTodoItems())
            .catch((error) => <Alert variant="error">Error calling todo service rest api, error:  {error}</Alert>);
    }

    let validationErrorMsg = "Please enter a valid username (alphanumeric characters only).";

  return (
  <Card className="m-4">
       <Alert variant="warning">Error calling todo service rest api, error</Alert>
       <Card.Header>
           <Card.Title>New Todo Item</Card.Title>
       </Card.Header>
       <Card.Body>
           <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Form.Control
                id="todoId"
                type="text"
                placeholder={form.todoId}
              />
              <Form.Group>
                <Form.FloatingLabel controlId="created_by" label="created by" className="mb-3">
                      <Form.Control
                      autoFocus
                      required
                      id="created_by"
                      type="text"
                      placeholder={form.created_by}
                      onChange={handleFieldChange}
                      isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(form.created_by)}
                    />
                    <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group>
                <Form.FloatingLabel controlId="name" label="name" className="mb-3">
                      <Form.Control
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleFieldChange}
                      />
                      <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
                </Form.FloatingLabel>
              </Form.Group>
                 <Form.Group>
                  <Form.FloatingLabel controlId="description" label="description" className="mb-3">
                      <Form.Control
                        id="description"
                        type="text"
                         value={form.description}
                        onChange={handleFieldChange}
                      />
                      <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel controlId="action" label="action" className="mb-3">
                      <Form.Control
                        id="action"
                        type="text"
                         value={form.action}
                        onChange={handleFieldChange}
                      />
                      <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel controlId="assigned_to" label="assigned to" className="mb-3">
                      <Form.Control
                        id="assigned_to"
                        type="text"
                         value={form.assigned_to}
                        onChange={handleFieldChange}
                      />
                      <Form.Control.Feedback type="invalid">{validationErrorMsg}</Form.Control.Feedback>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                      <div className="float-end">
                         <Button onClick={() => navigateTodoItems()} className="m-1" variant="outline-secondary" >Cancel</Button>
                         <Button type="submit" className="" variant="outline-primary" >Save</Button>
                      </div>
               </Form.Group>
            </Form>
        </Card.Body>
    </Card>
  );
}