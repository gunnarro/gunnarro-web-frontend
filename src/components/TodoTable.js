import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { PropTypes } from 'prop-types';
// bootstrap import
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle, ClockHistory } from 'react-bootstrap-icons'
import { Table } from 'reactstrap';
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { ShowConfirmDeleteDialog } from '../components/ConfirmModalDialog';
// service import
import { TodoServiceApiFactory, Configuration } from "../generated/client/todoservice";
import { TodoDto } from "../generated/client/todoservice/model";

function formatDate(dateStr:string) {
    return new Date(Date.parse(dateStr)).toDateString();
}

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
function GetTodosData({ userName }): React.ReactElement {
    GetTodosData.propTypes = {
        userName: PropTypes.string.isRequired
    };

    const navigate = useNavigate()
    // load data
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [todoListData, setTodoListData] = useState([]);
    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

    // we use useEffect with an empty array [], this in order to prevent that the rest api is called whenever the component is rendered, which cause an infinity loop.
    useEffect(() => {
        setLoading(true);
        todoApi.getTodosByUserName(userName)
            .then((response) => {
                setTodoListData(response.data);
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
    /*
    useEffect(() => {
      TodoRestApi.get('/todos/user/' + userName)
        .then(response => {
            setTodoListData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);
*/
    const deleteTodo = (todoId) => {
        const confirmed = ShowConfirmDeleteDialog(true);
        if (confirmed) {
            console.log("confirmed delete! todoId=" + todoId)
        } else {
            TodoRestApi.delete("/todos/" + todoId)
           .then((response) => console.log(response.data))
           .catch((error) => console.log("Error calling todo service rest api, error: " + error));
           }
      };

    if (loading) {
        return <tr><td>loading todo for {userName} ...</td></tr>
    }

    return (
        <>
            {todoListData && todoListData.map(todo => (
              <tr key={todo.id}>
                 <td>{todo.status == 'Active' ? <CheckSquareFill /> : <ArrowDownLeftCircle />}</td>
                 <td>{todo.name}</td>
                 <td>{todo.description}</td>
                 <td>{todo.createdByUser}</td>
                 <td>{todo.lastModifiedByUser}</td>
                 <td>{formatDate(todo.createdDate)}</td>
                 <td>{formatDate(todo.lastModifiedDate)}</td>
                 <td>
                     <button onClick={() => navigate("/todo/" + todo.id + "/details")} type="button" className="btn btn-sm btn-outline-secondary">
                        <Pencil size={16} color="royalblue" />
                     </button>
                     <span>&nbsp;</span>
                     <button onClick={() => { deleteTodo(todo.id);}} type="button" className="btn btn-sm btn-outline-secondary">
                       <Trash  size={16} color="red" />
                     </button>
                     <span>&nbsp;</span>
                     <button onClick={() => navigate("/todo/" + todo.id + "/history")} type="button" className="btn btn-sm btn-outline-secondary">
                        <ClockHistory  size={16} color="black" />
                      </button>
                 </td>
             </tr>
            ))}
        </>
    );
}

export const TodoTable = (userName) => (
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
           { GetTodosData(userName) }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </Table>
)
