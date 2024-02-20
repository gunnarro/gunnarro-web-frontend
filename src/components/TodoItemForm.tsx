import React, { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
// bootstrap import
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Form,
  FormFeedback,
  FormText,
  ButtonGroup,
  Button,
  Alert,
} from 'reactstrap';
// project import
import { TodoRestApi } from 'components/TodoRestApi';

interface TodoItemFormProps {
  userName: string;
}

export const TodoItemForm: React.FC<TodoItemFormProps> = ({ userName }) => {
    // the todoId is provided through the uri.
    const { todoId } = useParams();
    const navigate = useNavigate();
    const navigateTodoItems = () => {
           //navigate('/todos');
           navigate(-1); // same as browser back button
        };
    // form constants
    const [formErrors, setFormErrors] = useState({});
    const [form, setForm] = useState({
        todoId: todoId,
        created_by: userName,
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

  return (
  <Card className="m-4">
       <Alert variant="warning">Error calling todo service rest api, error</Alert>
       <CardHeader>
           <CardTitle>New Todo Item</CardTitle>
       </CardHeader>
       <CardBody>
           <Form onSubmit={handleFormSubmit}>
            <Input
                id="todoId"
                type="text"
                value={form.todoId}
              />
              <FormGroup>
                        <Label for="created_by">Created by</Label>
                        <Input valid
                          id="created_by"
                          type="text"
                          value={form.created_by}
                          onChange={handleFieldChange}
                          autoFocus
                        />
                <FormFeedback valid>
                      put input validation errors here
               </FormFeedback>
                <FormText>
                     Example help text that remains unchanged.
                   </FormText>
               </FormGroup>
               <FormGroup>
                  <Label for="name">Name</Label>
                  <Input invalid
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleFieldChange}
                  />
                  <FormFeedback invalid >
                                        put input validation errors here
                                 </FormFeedback>
                </FormGroup>
                 <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    id="description"
                    type="text"
                     value={form.description}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="action">Action</Label>
                  <Input
                    id="action"
                    type="text"
                     value={form.action}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="assigned_to">Assigned to</Label>
                  <Input
                    id="assigned_to"
                    type="text"
                     value={form.assigned_to}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
                <FormGroup>
                      <div className="float-end">
                        <Button onClick={() => navigateTodoItems()} size="sm" className="m-1" color="secondary" outline>Cancel</Button>
                        <Button type="submit" size="sm" className="m-1" color="primary" outline>Save</Button>
                      </div>
               </FormGroup>
            </Form>
        </CardBody>
    </Card>
  );
}