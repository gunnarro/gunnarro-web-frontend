// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Table } from 'reactstrap';
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle, ClockHistory } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from '../../services/TodoRestApi';
import { TodoTable } from '../../components/TodoTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
import { AlertBox } from '../../components/Alert';
// service import
import { TodoServiceApiFactory, Configuration } from "../../generated/client/todoservice";
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
    // initial todo data
    const initialTodos: TodoDto[] = [];

     // load data
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [todoListData, setTodoListData] = useState<TodoDto[]>([]);
    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

    // we use useEffect with an empty array [], this in order to prevent that the rest api is called whenever the component is rendered, which cause an infinity loop.
    useEffect(() => {
        setLoading(true);
        todoApi.getTodosByUserName(userName)
            .then((response) => {
                const todoDtos = JSON.parse(JSON.stringify(response.data)) as TodoDto[];
                setTodoListData(todoDtos);
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
    } ,[])

    const handleDeleteTodo = (todoId:string) => {
        setShowConfirmDialog(true);
        setConfirmDialogTodoId(todoId);
        setConfirmDialogMsg("are yuo sure you want to delete " + todoId + "?")
        console.log("clicked delete button, todoId=" + todoId)
    }

    const handleCancelDeleteTodo = (todoId:string) => {
        setShowConfirmDialog(false);
        setConfirmDialogTodoId("");
        setConfirmDialogMsg("");
        console.log("canceled delete todoId=" + todoId);
    }

    const deleteTodo = (todoId:string) => {
        console.log("confirmed delete todoId=" + todoId)
        TodoRestApi.delete("/todos/" + todoId)
       .then((response) => console.log(response.data))
       .catch((error) => console.log("Error calling todo service rest api, error: " + error));
        // reset confirm dialog state variable
        setShowConfirmDialog(false);
        setConfirmDialogMsg("");
    };

    return (
    <Container>
     <div className="m-2 mx-auto">
        { error && <AlertBox title={t("applicationErrorTitle")} message={error} /> }
        { showConfirmDialog && <ShowConfirmDeleteDialog isShow={showConfirmDialog} itemId={confirmDialogTodoId} message={confirmDialogMsg} deleteTodoRef={deleteTodo} cancelDeleteTodoRef={handleCancelDeleteTodo} /> }
        <Card>
            <Card.Header>
                <h4 className="float-start">{t("todoListTitle")}</h4>
                    <Button onClick={() => navigateTodoNew()} size="sm" variant="outline-primary" className="float-end" >{t("add")}</Button>
                    <button onClick={() => handleDeleteTodo('12345678')} type="button" className="btn btn-sm btn-outline-secondary float-end"><Trash  size={16} color="red" /></button>
            </Card.Header>
            <Card.Body>
                  <Table>
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Created by</th>
                                <th scope="col">Last modified by</th>
                                <th scope="col">Created date</th>
                                <th scope="col">Last modified date</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                              todoListData.map(todo => (
                              <tr key={todo.id}>
                                 <td>{todo.status == TodoDtoStatusEnum.Open ? <CheckSquareFill /> : <ArrowDownLeftCircle />}</td>
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
                                     <button onClick={() => { handleDeleteTodo(todo.id as string);}} type="button" className="btn btn-sm btn-outline-secondary">
                                       <Trash  size={16} color="red" />
                                     </button>
                                     <span>&nbsp;</span>
                                     <button onClick={() => navigate("/todo/" + todo.id + "/history")} type="button" className="btn btn-sm btn-outline-secondary">
                                        <ClockHistory  size={16} color="black" />
                                      </button>
                                 </td>
                             </tr>
                            ))
                        }
                        </tbody>
                        <tfoot className="table-group-divider">
                            <tr>
                                <td>

                                </td>
                            </tr>
                        </tfoot>
                    </Table>
            </Card.Body>
        </Card>
       </div>
    </Container>
    )
}