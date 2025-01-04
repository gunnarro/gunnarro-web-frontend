// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle, ClockHistory } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from '../../services/TodoRestApi';
import { TodoTable } from '../../components/TodoTable';
//import { UsersTable } from '../../components/UsersTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
import { AlertBox } from '../../components/Alert';
// todo rest api import
import { AdminServiceApiFactory } from "../../generated/client/adminservice/api/admin-service-api";
import { Configuration } from "../../generated/client/adminservice/configuration";
import { TodoDto, TodoDtoStatusEnum, ErrorResponse } from "../../generated/client/adminservice/model";

function formatDate(dateStr:string) {
    return new Date(Date.parse(dateStr)).toDateString();
}

export const TodoAdminView = () => {
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
    const todoApi = AdminServiceApiFactory(new Configuration(), "", TodoRestApi);

    // Always called after the render() method, and we use useEffect with an empty array [], this in order to prevent that the rest api is called whenever the component is rendered, which cause an infinity loop.
    useEffect(() => {
        setLoading(true);
        getTodos();
        setLoading(false);
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

    const getTodos = () => {
     // clear current errors, if any
     setError("")
     todoApi.getTodos()
        .then((response) => {
            const todoDtos = JSON.parse(JSON.stringify(response.data)) as TodoDto[];
            setTodoListData(todoDtos);
            setLoading(false);
            console.log("loaded all todos,  admin user")
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
        {/* Nav tabs */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#todo" type="button" role="tab" aria-controls="home" aria-selected="true">Todos</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#user" type="button" role="tab" aria-controls="profile" aria-selected="false">User</button>
            </li>
        </ul>

        {/* Tab panels */}
        <div className="tab-content">
            <p/>
            <div role="tabpanel" className="tab-pane active" id="todo">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">{t("status")}</th>
                            <th scope="col">{t("id")}</th>
                            <th scope="col">{t("name")}</th>
                            <th scope="col">{t("items")}</th>
                            <th scope="col">{t("participants")}</th>
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
                             <td>{todo.id}</td>
                             <td>{todo.name}</td>
                             <td className="text-right">0</td>
                             <td className="text-right">0</td>
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
            </div>
            <div role="tabpanel" className="tab-pane" id="user">

            </div>
        </div>
    </div>

    {/*
     <div className="m-2 mx-auto">
        { error && <AlertBox title={t("applicationErrorTitle")} message={error} /> }
        { showConfirmDialog && <ShowConfirmDeleteDialog isShow={showConfirmDialog} itemId={confirmDialogTodoId} message={confirmDialogMsg} deleteRef={handleDeleteTodo} cancelDeleteRef={handleCancelDeleteTodo} /> }
        <Card>
            <Card.Header>
                <h4 className="float-start">{t("todoAdministration")}</h4>
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
       </div>
       */}
    </Container>
    )
}