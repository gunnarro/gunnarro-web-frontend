// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle, ClockHistory } from 'react-bootstrap-icons'
// project import
import { TodoRestApi, RestApiConfiguration } from '../../services/TodoRestApi';
import { TodoTable } from '../../components/TodoTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
import { AlertBox } from '../../components/Alert';
// service import
import { TodoServiceApiFactory } from "../../generated/client/todoservice";
import { TodoDto, TodoDtoStatusEnum,  } from "../../generated/client/todoservice/model";

function formatDate(dateStr:string) {
    return new Date(Date.parse(dateStr)).toDateString();
}

export const TodoListView = () => {
    const { t } = useTranslation()
    // the userName is provided through the uri.
    const { userName } = useParams() as { userName:string };
    const navigate = useNavigate();
    const navigateTodoNew = () => {
       navigate('/todo/new');
    };

    // confirm dialog useState
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [confirmDialogMsg, setConfirmDialogMsg] = useState("");
    const [confirmDialogTodoId, setConfirmDialogTodoId] = useState("");
    // initial todoDto data
    const initialTodos: TodoDto[] = [];

     // load data
    const [error, setError] = useState("");
    const [todoListData, setTodoListData] = useState<TodoDto[]>([]);
    const todoApi = TodoServiceApiFactory(RestApiConfiguration(), "", TodoRestApi);

    // Always called after the render() method, and we use useEffect with an empty array [],
    // this in order to prevent that the rest api is called whenever the component is rendered, which cause an infinity loop.
    useEffect(() => {
        getTodosByUserName(userName);
    } ,[])

    const confirmDeleteTodo = (todoId:string) => {
        setShowConfirmDialog(true);
        setConfirmDialogTodoId(todoId);
        setConfirmDialogMsg("are yuo sure you want to delete " + todoId + "?")
        console.log("clicked delete button, todoId=" + todoId)
    }

    const handleDeleteTodo = (todoId:string) => {
        deleteTodo(todoId);
    }

    const handleCancelDeleteTodo = (todoId:string) => {
        setError("");
        resetConformDialog();
        console.log("canceled delete todoId=" + todoId);
    }

    const getTodosByUserName = (userName:string) => {
         // clear current errors, if any
         setError("")
         todoApi.getTodosByUserName(userName)
            .then((response) => {
                const todoDtos = JSON.parse(JSON.stringify(response.data)) as TodoDto[];
                setTodoListData(todoDtos);
            })
            .catch(function (error) {
                 if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setError(error.response.data["description"]);
                } else {
                    setError(error.message);
                }
            })
    }

    const deleteTodo = (todoId:string) => {
        // clear current errors, if any
        setError("")
        todoApi.deleteTodo(todoId)
            .then((response) => {
                setError("deleted todoId=" + todoId);
                console.log("deleted todoId " + todoId)
            })
            .catch(function (error) {
                if (error.response && error.response.headers["content-type"] == 'application/json') {
                    setError(error.response.data["description"]);
                } else {
                    setError(error.message);
                }
            });
    }

    function resetConformDialog() {
        setShowConfirmDialog(false);
        setConfirmDialogTodoId("");
        setConfirmDialogMsg("");
    }

    return (
    <Container>
     <div className="m-2 mx-auto">
        { error && <AlertBox title={t("applicationErrorTitle")} message={error} /> }
        { showConfirmDialog && <ShowConfirmDeleteDialog isShow={showConfirmDialog} itemId={confirmDialogTodoId} message={confirmDialogMsg} deleteRef={handleDeleteTodo} cancelDeleteRef={handleCancelDeleteTodo} /> }
        <Card>
            <Card.Header>
                    <h4 className="float-start">{t("todoListTitle")}</h4>
                    <Button onClick={() => navigateTodoNew()} size="sm" variant="outline-primary" className="float-end" >{t("add")}</Button>
            </Card.Header>
            <Card.Body>
                  <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">{t("status")}</th>
                                <th scope="col">{t("name")}</th>
                                <th scope="col">{t("description")}</th>
                                <th scope="col">{t("createdBy")}</th>
                                <th scope="col">{t("lastModifiedBy")}</th>
                                <th scope="col">{t("createdDate")}</th>
                                <th scope="col">{t("lastModifiedDate")}</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                              todoListData.map(todo => (
                              <tr key={todo.id}>
                                 <td>{todo.status == TodoDtoStatusEnum.Open ? <CheckSquareFill /> : <ArrowDownLeftCircle color="green" />}</td>
                                 <td>{todo.name}</td>
                                 <td>{todo.description}</td>
                                 <td>{todo.createdByUser}</td>
                                 <td>{todo.lastModifiedByUser}</td>
                                 <td>{formatDate(todo.createdDate as string)}</td>
                                 <td>{formatDate(todo.lastModifiedDate as string)}</td>
                                 <td>
                                     <button onClick={() => navigate("/todo/" + todo.id + "/details")} type="button" className="btn btn-sm btn-outline-secondary">
                                        <Pencil size={16} color="royalblue" />
                                     </button>
                                     <span>&nbsp;</span>
                                     <button onClick={() => { confirmDeleteTodo(todo.id as string);}} type="button" className="btn btn-sm btn-outline-secondary">
                                       <Trash size={16} color="red" />
                                     </button>
                                     <span>&nbsp;</span>
                                     <button onClick={() => navigate("/todo/" + todo.id + "/history")} type="button" className="btn btn-sm btn-outline-secondary">
                                        <ClockHistory size={16} color="black" />
                                      </button>
                                 </td>
                             </tr>
                            ))
                        }
                        </tbody>
                        <tfoot className="table-group-divider">
                            <tr>
                            </tr>
                        </tfoot>
                    </table>
            </Card.Body>
        </Card>
       </div>
    </Container>
    )
}