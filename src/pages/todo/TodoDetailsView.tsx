// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// bootstrap icon import
import { Trash, Pencil, CheckCircleFill } from 'react-bootstrap-icons';

// project import
import { TodoRestApi } from '../../services/TodoRestApi';
import { TodoItemTable } from '../../components/TodoItemTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
// service import
import { TodoServiceApiFactory, TodoDto, TodoItemDto, TodoDtoStatusEnum, ParticipantDto, ErrorResponse, Configuration } from "../../generated/client/todoservice";

export const TodoDetailsView = () => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };

    const navigate = useNavigate();
    const navigateTodoItemNew = () => {
       navigate("/todo/" + todoId + "/items/new");
    };

    const navigateAddParticipant = () => {
        navigate("/todo/" + todoId + "/participants");
     };

     // load data
    const [todoData, setTodoData] = useState<TodoDto>({
            id: '' as string,
            createdByUser: '' as string,
            lastModifiedByUser: '' as string,
            createdDate: '' as string,
            name: '' as string,
            description: '' as string,
            status: TodoDtoStatusEnum.Open,
            todoItemDtoList: [] as TodoItemDto[],
            participantDtoList: [] as ParticipantDto[],
          });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

    useEffect(() => {
        setLoading(true);
        todoApi.getTodoById(todoId)
            .then((response) => {
                setTodoData(response.data);
                setLoading(false);
             })
            .catch(function (error) {
                 if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setError(error.response.data["description"]);
                } else {
                    setError(error.message);
                }
                setLoading(false);
            });
    }, []);

    const deleteTodoItem = (todoId:string, todoItemId:string) => {
        const confirmed = true;//ShowConfirmDeleteDialog(true);
        if (confirmed) {
            console.log("confirmed delete! todoId=" + todoId + ", todoItemId=" + todoItemId)
        } else {
            TodoRestApi.delete("/todos/" + todoId + "/items/" + todoItemId)
           .then((response) => console.log(response.data))
           .catch((error) => console.log("Error calling todo service rest api, error: " + error));
       }
    };

    const getAssignedTaskCount = (userName:string) => {
        var counter = 0 as number;
        todoData.todoItemDtoList && todoData.todoItemDtoList.forEach(todoItem => {
            if (todoItem.assignedTo == userName) {
                counter += 1;
            }
        });

        return <span>{counter}</span>;
    };

    if (loading) {
        return <div>loading todo items for {todoId} ...</div>
    }

    return (
    <Container>
        <Card className="m-4">
           <Card.Header>
                <div className="d-flex justify-content-between">
                    <h4>{todoData.name} - {todoData.description}</h4>
                    <Button onClick={() => navigate(-1)} size="sm" variant="outline-primary">{t("back")}</Button>
                    <Button onClick={() => navigateAddParticipant()} size="sm" variant="outline-primary">{t("addParticipant")}</Button>
                </div>
           </Card.Header>
           <Card.Body>
                <div>
                   <dl className="mb-3 row">
                       <dt className="col-sm-3">{t("reference")}</dt>
                       <dd className="col-sm-8"><a href="/todo/:todoId/details">{todoData.id}</a></dd>
                       <dt className="col-sm-3">{t("createdModifiedBy")}</dt>
                       <dd className="col-sm-8">{todoData.createdByUser} / {todoData.lastModifiedByUser}</dd>
                       <dt className="col-sm-3">{t("createdModifiedDate")}</dt>
                       <dd className="col-sm-8">{todoData.createdDate} / {todoData.lastModifiedDate}</dd>
                       <dt className="col-sm-3">{t("status")}</dt>
                       <dd className="col-sm-8">{t(todoData.status)}</dd>
                       <dt className="col-sm-3">{t("participants")}</dt>
                       <dd className="col-sm-8">
                           <div className="hstack gap-4 col-md-2">
                              {
                                 todoData.participantDtoList && todoData.participantDtoList.map((participant) => (
                                      <Button disabled key="{participant.id}" type="button" className="position-relative" variant="outline-secondary">
                                         {participant.name}
                                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{ getAssignedTaskCount(participant.name as string) }</span>
                                      </Button>
                                 ))
                              }
                           </div>
                       </dd>
                   </dl>
               </div>
                <table className="table">
                       <thead>
                           <tr>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col" className="float-end" ><Button onClick={() => navigateTodoItemNew()} size="sm" variant="outline-primary" >{t("add")}</Button></th>
                           </tr>
                           <tr>
                               <th scope="col">{t("status")}</th>
                               <th scope="col">{t("taskName")}</th>
                               <th scope="col">{t("action")}</th>
                               <th scope="col">{t("assignedTo")}</th>
                               <th scope="col">{t("description")}</th>
                               <th scope="col">#</th>
                           </tr>
                       </thead>
                       <tbody className="table-group-divider">
                             {todoData.todoItemDtoList && todoData.todoItemDtoList.map(item => (
                                  <tr key={item.id}>
                                     <td>{item.status == TodoDtoStatusEnum.Done ? <CheckCircleFill /> : t(item.status)}</td>
                                     <td>{item.name}</td>
                                     <td>{t(item.action as string)}</td>
                                     <td>{item.assignedTo}</td>
                                     <td>{item.description}</td>
                                     <td>
                                        <button onClick={() => navigate("/todo/" + todoData.id + "/items")} type="button" className="btn btn-sm btn-outline-secondary">
                                            <Pencil size={16} color="royalblue" />
                                        </button>
                                        <span>&nbsp;</span>
                                        <button onClick={() => { deleteTodoItem('23', '23');}} type="button" className="btn btn-sm btn-outline-secondary">
                                            <Trash  size={16} color="red" />
                                        </button>
                                     </td>
                                 </tr>
                             ))}
                       </tbody>
                       <tfoot className="table-group-divider">
                           <tr>

                           </tr>
                       </tfoot>
                   </table>
           </Card.Body>
        </Card>
    </Container>
    )
}