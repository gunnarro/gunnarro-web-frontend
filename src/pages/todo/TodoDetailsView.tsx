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
// service import
import { TodoServiceApiFactory, TodoDto, TodoItemDto, TodoDtoStatusEnum, ErrorResponse, Configuration } from "../../generated/client/todoservice";

export const TodoDetailsView = () => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };

    const navigate = useNavigate();
    const navigateTodoItemNew = () => {
       navigate("/todo/" + todoId + "/items/new");
    };

     // load data
    const [todoData, setTodoData] = useState<TodoDto>({
            id: '',
            createdByUser: '',
            lastModifiedByUser: '',
            createdDate: '',
            name: '',
            description: '',
            status: TodoDtoStatusEnum.Open,
            todoItemDtoList: [],
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

    if (loading) {
        return <div>loading todo items for {todoId} ...</div>
    }

    return (
    <Container>
        <Card className="m-4">
           <Card.Header>
                <h4>{todoData.name}</h4>
           </Card.Header>
           <Card.Body>
                <div>
                   <dl className="mb-3 row">
                       <dt className="col-sm-3">{t("description")}</dt>
                       <dd className="col-sm-8">{todoData.description}</dd>
                       <dt className="col-sm-3">{t("id")}</dt>
                       <dd className="col-sm-8"><a href="/todo/:todoId/details">{todoData.id}</a></dd>
                       <dt className="col-sm-3">{t("createdBy")}</dt>
                       <dd className="col-sm-8">{todoData.createdByUser}</dd>
                       <dt className="col-sm-3">{t("lastModifiedBy")}</dt>
                       <dd className="col-sm-8">{todoData.lastModifiedByUser}</dd>
                       <dt className="col-sm-3">{t("createdDate")}</dt>
                       <dd className="col-sm-8">{todoData.createdDate}</dd>
                       <dt className="col-sm-3">{t("lastModifiedDate")}</dt>
                       <dd className="col-sm-8">{todoData.lastModifiedDate}</dd>
                       <dt className="col-sm-3">{t("status")}</dt>
                       <dd className="col-sm-8">{todoData.status}</dd>
                   </dl>
               </div>
                <table className="table table-borderless table-hover">
                       <thead>
                           <tr>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col"/>
                                <th scope="col" className="float-end" ><Button onClick={() => navigateTodoItemNew()} size="sm" variant="outline-primary" >add</Button></th>
                           </tr>
                           <tr>
                               <th scope="col">Status</th>
                               <th scope="col">Name</th>
                               <th scope="col">Action</th>
                               <th scope="col">Assigned to</th>
                               <th scope="col">Description</th>
                               <th scope="col">#</th>
                           </tr>
                       </thead>
                       <tbody className="table-group-divider">
                             {todoData.todoItemDtoList && todoData.todoItemDtoList.map(item => (
                                  <tr key={item.id}>
                                     <td>{item.status == TodoDtoStatusEnum.Done ? <CheckCircleFill /> : t(item.status)}</td>
                                     <td>{item.name}</td>
                                     <td>{item.action}</td>
                                     <td>{item.assignedTo}</td>
                                     <td>{item.description}</td>
                                     <td>

                                     </td>
                                 </tr>
                             ))}
                       </tbody>
                       <tfoot className="table-group-divider">
                           <tr>
                               <td></td>
                           </tr>
                       </tfoot>
                   </table>
           </Card.Body>
        </Card>
    </Container>
    )
}