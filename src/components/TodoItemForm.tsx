// react import
import { useTranslation } from 'react-i18next';
import React, { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { AlertBox } from '../components/Alert';
import { LANGUAGES } from "../constants";
// service import
import { TodoServiceApiFactory, TodoItemDto, TodoItemDtoStatusEnum, TodoItemDtoActionEnum, ErrorResponse, Configuration } from "generated/client/todoservice";

interface TodoItemFormProps {
  userName: string;
}

export const TodoItemForm: React.FC<TodoItemFormProps> = (props) => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };
    // if the price input field should be visible or not
    const [showPriceField, setShowPriceField] = useState(false);
    const navigate = useNavigate();
    const navigateTodoItems = () => {
           //navigate('/todos');
           navigate(-1); // same as browser back button
        };

    // form constants
    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [todoItemForm, setTodoItemForm] = useState({
        todo_id: todoId,
        created_by: props.userName,
        name: '',
        description: '',
        action: TodoItemDtoActionEnum.StayAsIs,
        status: TodoItemDtoStatusEnum.Open,
        assigned_to: '',
      });

     const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItemForm({
          ...todoItemForm,
          [event.target.id]: event.target.value,
        });
     };

    const handleActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value == "TO_BE_SOLD") {
            setShowPriceField(true);
        } else {
            setShowPriceField(false);
        }
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
            const todoItemDto : TodoItemDto = {
                  todoId: todoItemForm.todo_id,
                  createdByUser: todoItemForm.created_by,
                  lastModifiedByUser: todoItemForm.created_by,
                  name: todoItemForm.name,
                  description: todoItemForm.description,
                  status: TodoItemDtoStatusEnum.Open,
                  action: TodoItemDtoActionEnum.StayAsIs,
                  assignedTo: todoItemForm.assigned_to
            };

            const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

            todoApi.createTodoItem(todoId, todoItemDto)
                .then((response) => navigateTodoItems())
                .catch(function (error) {
                     if (error.response && error.response.headers["content-type"] == 'application/json') {
                        setFormErrors(error.response.data["description"]);
                    } else {
                       setFormErrors(error.message + " StackTrace:\n" + error.stack);
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
          <Card.Title>{t("todoItemFormTitle")}, todoId={todoId}, user={props.userName}, createdBy={todoItemForm.created_by}</Card.Title>
       </Card.Header>
       <Card.Body>
           <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Form.Control
                disabled
                hidden
                id="todo_id"
                type="text"
                value={todoItemForm.todo_id}
              />
              <Form.Group>
                <Form.FloatingLabel label={t("createdBy")} className="mb-3">
                      <Form.Control
                      autoFocus
                      required
                      id="created_by"
                      type="text"
                      value={todoItemForm.created_by}
                      onChange={handleFieldChange}
                      isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoItemForm.created_by)}
                    />
                    <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group>
                <Form.FloatingLabel label={t("name")} className="mb-3">
                      <Form.Control
                        required
                        id="name"
                        type="text"
                        value={todoItemForm.name}
                        onChange={handleFieldChange}
                        isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoItemForm.name)}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                </Form.FloatingLabel>
              </Form.Group>
                 <Form.Group>
                  <Form.FloatingLabel label={t("description")} className="mb-3">
                      <Form.Control
                        id="description"
                        type="text"
                        value={todoItemForm.description}
                        onChange={handleFieldChange}
                        isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoItemForm.description)}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel label={t("action")} className="mb-3">
                        <Form.Select className="form-select" size="sm" defaultValue={t(TodoItemDtoActionEnum.StayAsIs)} onChange={handleActionSelectChange}>
                           {
                             Object.entries(TodoItemDtoActionEnum).map(([key, value]) => (
                               <option id="action" value={value} key={key}>
                                 {t(key)}
                               </option>
                             ))
                           }
                         </Form.Select>
                    </Form.FloatingLabel>
                </Form.Group>
              { showPriceField &&
                <Form.Group>
                    <Form.FloatingLabel label={t("price")} className="mb-3">
                      <Form.Control
                        required
                        id="price"
                        type="text"
                        value={todoItemForm.assigned_to}
                        onChange={handleFieldChange}
                        isInvalid={validated && !/^[0-9]+$/.test(todoItemForm.assigned_to)}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                    </Form.FloatingLabel>
                </Form.Group>
                }
                <Form.Group>
                    <Form.FloatingLabel label={t("assignedTo")} className="mb-3">
                      <Form.Control
                        required
                        id="assigned_to"
                        type="text"
                        value={todoItemForm.assigned_to}
                        onChange={handleFieldChange}
                        isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoItemForm.assigned_to)}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel label={t("assignedTo")} className="mb-3">
                        <Form.Select className="form-select" size="sm" defaultValue={t(TodoItemDtoActionEnum.StayAsIs)} onChange={handleActionSelectChange}>
                           {
                             Object.entries(TodoItemDtoActionEnum).map(([key, value]) => (
                               <option id="assigned_to" value={value} key={key}>
                                 {t(key)}
                               </option>
                             ))
                           }
                         </Form.Select>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                      <div className="float-end">
                         <Button onClick={() => navigateTodoItems()} className="m-1" variant="outline-secondary" >{t("Cancel")}</Button>
                         <Button type="submit" variant="outline-primary" >{t("Save")}</Button>
                      </div>
               </Form.Group>
            </Form>
        </Card.Body>
      </Card>
    </div>
  );
}