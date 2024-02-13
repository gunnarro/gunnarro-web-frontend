import { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
  ButtonGroup,
  Button,
} from 'reactstrap';
// project import
import { TodoRestApi } from 'components/TodoRestApi';

export const TodoForm = () => {
    const navigate = useNavigate();
    const navigateTodos = () => {
       //navigate('/todos');
       navigate(-1); // same as browser back button
    };

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
        // map form data to todo API model
        const todoData = JSON.stringify({
              createdByUser: todoForm.created_by,
              lastModifiedByUser: todoForm.created_by,
              name: todoForm.name,
              description: todoForm.description,
              status: todoForm.status
        });
        // send data
         TodoRestApi.post("/todos", todoData)
           .then((response) => navigateTodos())
           .catch((error) => console.log("Error calling todo service rest api, error: " + error));
    }

  return (
    <Card className="m-4">
     <CardHeader>
         <CardTitle>New Todo task</CardTitle>
     </CardHeader>
     <CardBody>
        <Form onSubmit={handleFormSubmit}>
           <FormGroup>
                  <Label for="created_by">Created by</Label>
                  <Input
                    id="created_by"
                    type="text"
                    value={todoForm.created_by}
                    onChange={handleFieldChange}
                    autoFocus
                  />
           </FormGroup>
           <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={todoForm.name}
                onChange={handleFieldChange}
              />
           </FormGroup>
             <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                type="text"
                value={todoForm.description}
                onChange={handleFieldChange}
              />
           </FormGroup>
            <FormGroup>
                  <div className="float-end">
                    <Button onClick={() => navigateTodos()} size="sm" className="m-1" color="secondary" outline>Cancel</Button>
                    <Button type="submit" size="sm" className="m-1" color="primary" outline>Save</Button>
                  </div>
           </FormGroup>
        </Form>
     </CardBody>
    </Card>
  );
}