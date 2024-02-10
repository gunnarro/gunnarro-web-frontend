import { useState } from 'react';
// bootstrap import
import {
  FormGroup,
  Label,
  Input,
  Form,
  Button,
} from 'reactstrap';

// project import
import { TodoRestApi } from 'components/TodoRestApi';

 function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const todoData = JSON.stringify({
                          name: 'form.name',
                          description: 'form.description',
                          status: 'form.status'
                        });

             TodoRestApi.post("/todos", todoData)
               .then((response) => console.log(response.data))
               .catch((error) => console.log("Error calling todo service rest api, error: " + error));

     //   setForm(INITIAL_STATE);
      }

export const TodoForm = () => {
//    const INITIAL_STATE = {
//      name: '',
//      description: '',
//      status: '',
//    };

    const [form, setForm] = useState({
        name: '',
        description: '',
        status: '',
      });

      const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value,
        });
      };

  return (
    <Form onSubmit={handleFormSubmit}>
       <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={form.name}
            onChange={handleFieldChange}
          />
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
        <FormGroup tag="fieldset">
            <Label>Status</Label>
            <FormGroup switch disabled>
                    <Input type="switch" disabled />
                    <Label check>Active</Label>
            </FormGroup>
            <FormGroup switch disabled>
                    <Input id="status" type="switch" disabled />
                    <Label>Finished</Label>
            </FormGroup>
        </FormGroup>
        <FormGroup>
        <Button type="submit">Add</Button>
        </FormGroup>
    </Form>
  );
}