// react import
import { useTranslation } from 'react-i18next';
import React, { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
// project import
import { TodoRestApi, toTodoItemDtoStatusEnum, toTodoItemDtoPriorityEnum, toTodoItemDtoActionEnum } from '../services/TodoRestApi';
import { AlertBox } from '../components/Alert';
import { LANGUAGES } from "../constants";
// service import
import { TodoServiceApiFactory, TodoItemDto, ParticipantDto, TodoItemDtoStatusEnum, TodoItemDtoActionEnum, TodoItemDtoPriorityEnum, ErrorResponse, Configuration } from "../generated/client/todoservice";

interface EditTodoItemFormProps {
  userName: string;
}

export const EditTodoItemForm: React.FC<EditTodoItemFormProps> = (props) => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId, todoItemId } = useParams() as { todoId:string, todoItemId:string };
    // if the price input field should be visible or not
    const [showPriceField, setShowPriceField] = useState(false);
    const [switchState, setSwitchState] = useState(false);

    const navigate = useNavigate();
    const navigateTodoItems = () => {
           //navigate('/todos');
           navigate(-1); // same as browser back button
        };

    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);
    // form constants
    const [formErrors, setFormErrors] = useState("");
    const [validated, setValidated] = useState(false);
    const [participantListData, setParticipantListData] = useState<ParticipantDto[]>([]);

    const [todoItemForm, setTodoItemForm] = useState(
    {
          id: '',
          todo_id: '',
          created_by: '',
          last_modified_by: '',
          name: '',
          category: '',
          description: '',
          status: '',
          action: '',
          price: 0,
          priority: '',
          approval_required: 'false',
          assigned_to: ''
    });

    useEffect(() => {
            getTodoItem(todoId, todoItemId);
            getTodoParticipants(todoId);
    }, [])

    const getTodoItem = (todoId:string, todoItemId:string) => {
         // clear current errors, if any
         //setError("")
         todoApi.getTodoItem(todoId, todoItemId)
            .then((response) => {
               setTodoItemForm ( {
                          id: response.data.id!,
                          todo_id: response.data.todoId!,
                          created_by: response.data.createdByUser!,
                          last_modified_by: '',
                          name: response.data.name!,
                          category: response.data.category!,
                          description: response.data.description!,
                          status: response.data.status,
                          action: response.data.action,
                          price: response.data.price!,
                          priority: response.data.priority,
                          approval_required: String(response.data.approvalRequired),
                          assigned_to: response.data.assignedTo!
                    });
               // setTodoItemForm(todoItem);
                //setLoading(false);
                console.log("loaded todo item into form, todoId=" + todoItemForm.todo_id + ", todoItemId=" + todoItemId + ", name=" + todoItemForm.name  + ", approval=" + todoItemForm.approval_required + ", " + String(response.data.approvalRequired))
            })
            .catch(function (error) {
                 if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setFormErrors(error.response.data["description"]);
                } else {
                    setFormErrors(error.message);
                }
            })
        }

    const getTodoParticipants = (todoId:string) => {
         // clear current errors, if any
         //setError("")
         todoApi.getTodoParticipants(todoId)
            .then((response) => {
                const participants = JSON.parse(JSON.stringify(response.data)) as ParticipantDto[];
                setParticipantListData(participants);
                //setLoading(false);
                console.log("loaded participants for todoId=" + todoId)
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
            // pass all todoItemForm properties
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
            // pass all todoItemForm properties
          ...todoItemForm,
          [event.target.id]: event.target.value,
        });
    };

    const handleApprovalCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItemForm({
            // pass all todoItemForm properties
          ...todoItemForm,
          [event.target.id]: String(event.target.checked),
        });
        console.log("id=" + event.target.id + ", value=" + event.target.checked  + ", todoItemForm.approval_required=" + todoItemForm.approval_required)
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
                  id: todoItemForm.id,
                  todoId: todoItemForm.todo_id,
                  createdByUser: todoItemForm.created_by,
                  lastModifiedByUser: todoItemForm.created_by,
                  name: todoItemForm.name,
                  category: todoItemForm.category,
                  description: todoItemForm.description,
                  status: toTodoItemDtoStatusEnum(todoItemForm.status),
                  action: toTodoItemDtoActionEnum(todoItemForm.action),
                  price: todoItemForm.price,
                  priority: toTodoItemDtoPriorityEnum(todoItemForm.priority),
                  approvalRequired: Boolean(todoItemForm.approval_required).valueOf(),
                  assignedTo: todoItemForm.assigned_to
            };

            console.log("form assigned to: " + todoItemForm.assigned_to + ", form approval: " + todoItemForm.approval_required);
            console.log(todoItemDto);
            const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

            todoApi.updateTodoItem(todoId, todoItemDto)
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
          <Card.Title>{t("todoItemFormTitle")}</Card.Title>
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
              <div className="row">
                  <div className="col-md-6">
                      <Form.Group>
                        <Form.FloatingLabel label={t("createdBy")} className="mb-3">
                              <Form.Control
                              disabled={true}
                              id="created_by"
                              type="text"
                              value={todoItemForm.created_by}
                            />
                            <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                        </Form.FloatingLabel>
                      </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group>
                      <Form.FloatingLabel label={t("lastModifiedBy")} className="mb-3">
                            <Form.Control
                            disabled={true}
                            id="created_date"
                            type="text"
                            value={todoItemForm.last_modified_by}
                          />
                          <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                      </Form.FloatingLabel>
                    </Form.Group>
                </div>
              </div>
              <Form.Group>
                <Form.FloatingLabel label={t("name")} className="mb-3">
                      <Form.Control
                        disabled={true}
                        id="name"
                        type="text"
                        value={todoItemForm.name}
                      />
                      <Form.Control.Feedback type="invalid">{t("validationErrorMsg")}</Form.Control.Feedback>
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group>
                  <Form.FloatingLabel label={t("category")} className="mb-3">
                        <Form.Control
                          autoFocus
                          id="category"
                          type="text"
                          value={todoItemForm.category}
                          onChange={handleFieldChange}
                          isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(todoItemForm.category)}
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
                    <Form.FloatingLabel label={t("status")} className="mb-3">
                        <Form.Select id="status" name="status" className="form-select" size="sm" value={todoItemForm.status} onChange={handleActionSelectChange}>
                           {
                             Object.entries(TodoItemDtoStatusEnum).map(([key, value]) => (
                               <option key={key} value={value} >
                                 {t(key)}
                               </option>
                             ))
                           }
                         </Form.Select>
                    </Form.FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <Form.FloatingLabel label={t("priority")} className="mb-3">
                        <Form.Select id="priority" name="priority" className="form-select" size="sm" value={todoItemForm.priority} onChange={handleActionSelectChange}>
                           {
                             Object.entries(TodoItemDtoPriorityEnum).map(([key, value]) => (
                               <option key={key} value={value} >
                                 {t(key)}
                               </option>
                             ))
                           }
                         </Form.Select>
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
                            type="number"
                            value={todoItemForm.price}
                            onChange={handleFieldChange}
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
                         value={String(todoItemForm.approval_required)}
                         label={t("approvalRequired")}
                         onChange={handleApprovalCheckChange} />
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