// react import
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// project import
import { TodoRestApi, toTodoItemDtoActionEnum } from '../services/TodoRestApi';
import { AlertBox } from '../components/Alert';
// service import
import { TodoServiceApiFactory, TodoItemDto, ParticipantDto, TodoItemDtoStatusEnum, TodoItemDtoActionEnum, TodoItemDtoPriorityEnum, Configuration } from "../generated/client/todoservice";

interface TodoItemFormProps {
  userName: string;
}

export const TodoItemForm = () => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };
    // if the price input field should be visible or not
    const [showPriceField, setShowPriceField] = useState(false);

    const navigate = useNavigate();
    const navigateTodoItems = () => {
           navigate(-1); // same as browser back button
        };

    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);
    // form constants
    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [participantListData, setParticipantListData] = useState<ParticipantDto[]>([]);
    const [todoItemForm, setTodoItemForm] = useState({
        todo_id: todoId,
        created_by: "", // always set equal to user that create this todo item, can not be changed
        name: '',
        description: '',
        action: '',
        price: '',
        status: TodoItemDtoStatusEnum.Open, // set to Open as default, can not be changed for new todo item
        priority: TodoItemDtoPriorityEnum.Medium,
        approval_required: false,
        assigned_to: '',
      });

     useEffect(() => {
            getTodoParticipants(todoId);
        } ,[])

    const getTodoParticipants = (todoId:string) => {
         // clear current errors, if any
         todoApi.getTodoParticipants(todoId)
            .then((response) => {
                const participants = JSON.parse(JSON.stringify(response.data)) as ParticipantDto[];
                setParticipantListData(participants);
            })
            .catch(function (error) {
                 if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setFormErrors(error.response.data["description"]);
                } else {
                    setFormErrors(error.message);
                }
            })
    }

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
        setTodoItemForm({
          ...todoItemForm,
          [event.target.id]: event.target.value,
        });
    };

    const handleAssignToSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTodoItemForm({
          ...todoItemForm,
          [event.target.id]: event.target.value,
        });
    };

    function isInStringEnum(key: string, enumeration: any): boolean {
        return Object.keys(enumeration).includes(key) || Object.values(enumeration).includes(key);
    }

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
            // map from form data into api todoItemDto model
            const todoItemDto : TodoItemDto = {
                  todoId: todoItemForm.todo_id,
                  name: todoItemForm.name,
                  description: todoItemForm.description,
                  status: todoItemForm.status,
                  action: toTodoItemDtoActionEnum(todoItemForm.action),
                  priority: TodoItemDtoPriorityEnum.Medium,
                  approvalRequired: false,
                  assignedTo: todoItemForm.assigned_to
            };

            console.log("form assigned to: " + todoItemForm.assigned_to);
            console.log(todoItemDto);
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
  <div className="m-2 w-50 mx-auto">
    {formErrors && <AlertBox title={t("applicationErrorTitle")} message={formErrors} />}
    <Card>
       <Card.Header>
          <Card.Title>{t("newTodoItemFormTitle")}</Card.Title>
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
                      disabled
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
                        autoFocus
                        required
                        id="name"
                        type="text"
                        value={todoItemForm.name}
                        onChange={handleFieldChange}
                        isInvalid={validated && !/^[a-zA-Z\d]+$/.test(todoItemForm.name)}
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
                        isInvalid={validated && !/^[a-zA-Z\d]+$/.test(todoItemForm.description)}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel label={t("action")} className="mb-3">
                        <Form.Select id="action" name="action" className="form-select" size="sm" value={todoItemForm.action} onChange={handleActionSelectChange}>
                           {
                             Object.entries(TodoItemDtoActionEnum).map(([key, value]) => (
                               <option key={key} value={value} >
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
                            value={todoItemForm.price}
                            onChange={handleFieldChange}
                            isInvalid={validated && !/^\d+$/.test(todoItemForm.price)}
                          />
                          <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                        </Form.FloatingLabel>
                    </Form.Group>
                }
                <Form.Group>
                    <Form.FloatingLabel label={t("assignTo")} className="mb-3">
                        <Form.Select id="assigned_to" name="assigned_to" className="form-select" size="sm" value={todoItemForm.assigned_to} onChange={handleAssignToSelectChange} >
                           {
                                participantListData.map(participant => (
                                    <option key={participant.id} value={participant.name} >
                                        {participant.name}
                                    </option>
                               ))
                           }
                         </Form.Select>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Check
                         id="approval_required"
                         type="switch"
                         label={t("approvalRequired")}
                       />
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