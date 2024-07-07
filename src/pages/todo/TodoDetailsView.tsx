// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// bootstrap icon import
import { Trash, Pencil, CheckCircleFill, CheckSquare, HandThumbsUp, HandThumbsDown } from 'react-bootstrap-icons';

// project import
import { TodoRestApi } from '../../services/TodoRestApi';
import { TodoItemTable } from '../../components/TodoItemTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
import { AlertBox } from '../../components/Alert';
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

     // confirm dialog useState
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [confirmDialogMsg, setConfirmDialogMsg] = useState("");
    const [confirmDialogTodoItemId, setConfirmDialogTodoItemId] = useState("");

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

    const confirmDeleteTodoItem = (todoId:string, todoItemId:string) => {
        setShowConfirmDialog(true);
        setConfirmDialogTodoItemId(todoItemId);
        setConfirmDialogMsg("are yuo sure you want to delete " + todoId + " / " + todoItemId + " ?" )
        console.log("clicked delete button, todoItemId=" + todoItemId)
    }

    const handleDeleteTodoItem = (todoItemId:string) => {
        deleteTodoItem(todoId, todoItemId);
    }

    const handleCancelDeleteTodoItem = (todoId:string) => {
        setError("");
        resetConformDialog();
        console.log("canceled delete todoId=" + todoId);
    }

    const deleteTodoItem = (todoId:string, todoItemId:string) => {
        console.log("delete todoItem, " + todoId + " / "+ todoItemId);
        // clear current errors, if any
        setError("")
        todoApi.deleteTodoItem(todoId, todoItemId)
            .then((response) => {
                setError("deleted todoItemId=" + todoItemId);
                console.log("deleted todoItemId " + todoItemId)
            })
            .catch(function (error) {
                if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setError(error.response.data["description"]);
                } else {
                    setError(error.message);
                }
            });
        }

    const getAssignedTaskCount = (userName:string) => {
        var counter = 0 as number;
        todoData.todoItemDtoList && todoData.todoItemDtoList.forEach(todoItem => {
            if (todoItem.assignedTo == userName) {
                counter += 1;
            }
        });
        return <span>{counter}</span>;
    };

    function resetConformDialog() {
        setShowConfirmDialog(false);
        setConfirmDialogTodoItemId("");
        setConfirmDialogMsg("");
    }

    function handleApproveTodoItem(todoId:string, todoItemId:string, approved:boolean) {
        let participantId = "564821726293783289"
        console.log("handle todo item approval, todoId=" + todoId + ", todoItemId=" + todoItemId + ", approved=" + approved + ", participantId=" + participantId);
    }

    if (loading) {
        return <div>loading todo items for {todoId} ...</div>
    }

    return (
    <Container>
        { error && <AlertBox title={t("applicationErrorTitle")} message={error} /> }
        { showConfirmDialog && <ShowConfirmDeleteDialog isShow={showConfirmDialog} itemId={confirmDialogTodoItemId} message={confirmDialogMsg} deleteRef={handleDeleteTodoItem} cancelDeleteRef={handleCancelDeleteTodoItem} /> }
        <Card className="m-2">
           <Card.Header>
                    <h4 className="float-start">{todoData.name} - {todoData.description}</h4>
                    <Button className="float-end ms-2" onClick={() => navigate(-1)} size="sm" variant="outline-primary">{t("back")}</Button>
                    <Button className="float-end" onClick={() => navigateAddParticipant()} size="sm" variant="outline-primary">{t("addParticipant")}</Button>
           </Card.Header>
           <Card.Body>
                <div>
                   <dl className="mb-3 row">
                       <dt className="col-sm-3">{t("reference")}</dt>
                       <dd className="col-sm-8"><Link to={"/todo/" + todoData.id + "/details"}>{todoData.id}</Link></dd>
                       <dt className="col-sm-3">{t("createdModifiedBy")}</dt>
                       <dd className="col-sm-8">{todoData.createdByUser} / {todoData.lastModifiedByUser}</dd>
                       <dt className="col-sm-3">{t("createdModifiedDate")}</dt>
                       <dd className="col-sm-8">{todoData.createdDate} / {todoData.lastModifiedDate}</dd>
                       <dt className="col-sm-3">{t("status")}</dt>
                       <dd className="col-sm-8">{t(todoData.status)}</dd>
                       <dt className="col-sm-3">{t("participants")}</dt>
                       <dd className="col-sm-8">
                           <div key="participants" className="hstack gap-4 col-md-2">
                              {
                                 todoData.participantDtoList && todoData.participantDtoList.map((participant) => (
                                      <Button disabled key={participant.id} type="button" className="position-relative" variant="outline-secondary">
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
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col" className="text-end" ><Button onClick={() => navigateTodoItemNew()} size="sm" variant="outline-primary" >{t("add")}</Button></th>
                           </tr>
                           <tr>
                               <th scope="col">{t("status")}</th>
                               <th scope="col">{t("priority")}</th>
                               <th scope="col">{t("category")}</th>
                               <th scope="col">{t("taskName")}</th>
                               <th scope="col">{t("action")}</th>
                               <th scope="col">{t("assignedTo")}</th>
                               <th scope="col">{t("description")}</th>
                               <th scope="col" className="text-center">#</th>
                           </tr>
                       </thead>
                       <tbody className="table-group-divider">
                             {todoData.todoItemDtoList && todoData.todoItemDtoList.map(item => (
                                  <tr key={item.id}>
                                     <td>{item.status == TodoDtoStatusEnum.Done ? <CheckCircleFill color="green" /> : t(item.status)}</td>
                                     <td>{t(item.priority)}</td>
                                     <td>{item.category}</td>
                                     <td>{item.name}</td>
                                     <td>{t(item.action as string)}</td>
                                     <td>{item.assignedTo}</td>
                                     <td>{item.description}</td>
                                     <td className="text-center">
                                        <button onClick={() => navigate("/todo/" + todoData.id + "/items/" + item.id + "/edit")} type="button" className="btn btn-sm btn-outline-secondary">
                                            <Pencil size={16} color="royalblue" />
                                        </button>
                                        <span>&nbsp;</span>
                                        <button onClick={() => { confirmDeleteTodoItem(todoData.id as string, item.id as string);}} type="button" className="btn btn-sm btn-outline-secondary">
                                            <Trash  size={16} color="red" />
                                        </button>
                                         <span>&nbsp;</span>
                                        {
                                            item.approvalRequired &&
                                            <button onClick={() => { handleApproveTodoItem(todoData.id as string, item.id as string, true);}} type="button" className="btn btn-sm btn-outline-secondary">
                                                <HandThumbsUp size={16} color="green" />
                                            </button>
                                        }
                                        {
                                            item.approvalRequired &&
                                            <button onClick={() => { handleApproveTodoItem(todoData.id as string, item.id as string, false);}} type="button" className="btn btn-sm btn-outline-secondary"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This top tooltip is themed via CSS variables.">
                                                 <HandThumbsDown size={16} color="red" />
                                            </button>
                                        }
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