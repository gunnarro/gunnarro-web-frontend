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
import { TodoServiceApiFactory, TodoDto, ErrorResponse, Configuration } from "../services/todo/api";

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);npm start
function GetTodosData({ userName }) {
    GetTodosData.propTypes = {
        userName: PropTypes.string.isRequired
    };
    const [error, setError] = useState("");
    const navigate = useNavigate()
    // load data
    const [todoListData, setTodoListData] = useState([]);
    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);

    todoApi.getTodosForUser(userName)
        .then((response) => setTodoListData(response.data))
        .catch(function (error) {
             if (error.response && error.response.headers["content-type"] == 'application/json') {
                setError(error.response.data["description"]);
            } else {
                setError(error.message);
            }
        });
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
            alert("ok")
        } else {
        TodoRestApi.delete("/todos/" + todoId)
                       .then((response) => console.log(response.data))
                       .catch((error) => console.log("Error calling todo service rest api, error: " + error));

                       }
      };

    return (
        <>
        {todoListData.map(todo => (
          <tr key={todo.idStr}>
             <td>{todo.status == 'Active' ? <CheckSquareFill /> : <ArrowDownLeftCircle />}</td>
             <td>{todo.name}</td>
             <td>{todo.description}</td>
             <td>{todo.createdByUser}</td>
             <td>{todo.lastModifiedByUser}</td>
             <td>{todo.createdDate}</td>
             <td>{todo.lastModifiedDate}</td>
             <td>
                 <button onClick={() => navigate("/todo/" + todo.idStr + "/details")} type="button" className="btn btn-sm btn-outline-secondary">
                    <Pencil size={16} color="royalblue" />
                 </button>
                 <span>&nbsp;</span>
                 <button onClick={() => { deleteTodo(todo.idStr);}} type="button" className="btn btn-sm btn-outline-secondary">
                   <Trash  size={16} color="red" />
                 </button>
                 <span>&nbsp;</span>
                 <button onClick={() => navigate("/todo/" + todo.idStr + "/history")} type="button" className="btn btn-sm btn-outline-secondary">
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
