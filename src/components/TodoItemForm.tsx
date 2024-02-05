import { useState } from 'react';
// bootstrap import
import {
  FormGroup,
  Label,
  Input,
  Form,
  Button,
} from 'reactstrap';

export const TodoItemForm = () => {
    const INITIAL_STATE = {
      name: '',
      description: '',
    };

    const [form, setForm] = useState({
        name: '',
        description: '',
      });

      const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value,
        });
      };

      const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(form.name + ' ' + form.description);
        setForm(INITIAL_STATE);
      };


  return (
    <Form onSubmit={handleFormSubmit}>
       <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            value={form.name}
            onChange={handleFieldChange}
          />
        </FormGroup>
         <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="description"
            type="text"
             value={form.description}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
            <Label>
              Status
            </Label>
            <FormGroup switch disabled>
                    <Input type="switch" disabled />
                    <Label check>Active</Label>
            </FormGroup>
            <FormGroup switch disabled>
                    <Input type="switch" disabled />
                    <Label check>Finished</Label>
            </FormGroup>
        </FormGroup>
        <FormGroup>
        <Button type="submit">
            Save
        </Button>
        </FormGroup>
    </Form>
  );
}