import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// bootstrap import
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from 'components/TodoRestApi';
import { showConfirmDeleteDialog } from 'components/ConfirmModalDialog';

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);npm start
function getTodosData({ userName }) {
    const navigate = useNavigate()
    const [todoListData, setTodoListData] = useState([]);
    // load data
    useEffect(() => {
      TodoRestApi.get('/todos/user/' + userName)
        .then(response => {
            setTodoListData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    const deleteTodo = (todoId) => {
        const confirmed = showConfirmDeleteDialog(true);
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
             <td>{todo.idStr}</td>
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
             </td>
         </tr>
        ))}
        </>
    );
}

export const TodoTable = (userName) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
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
           { getTodosData(userName) }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
