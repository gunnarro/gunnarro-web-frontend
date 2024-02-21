import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// bootstrap import
import { Trash, Pencil, CheckCircleFill } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from 'components/TodoRestApi';
import { showConfirmDeleteDialog } from 'components/ConfirmModalDialog';

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
function GetTodoItemData({ todoId }) {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
      TodoRestApi.get('/todos/' + todoId)
        .then(response => {
            //alert(response.headers['content-type'])
            //alert(JSON.stringify(response.data.toDoItemDtoList))
            if (response.data.toDoItemDtoList !== undefined && response.data.toDoItemDtoList !== null) {
                setData(response.data.toDoItemDtoList);
            }
        })
        .catch(error => {
          alert("Error calling todo service rest api, error" + error);
        });
    }, []);

     const deleteTodoItem = (todoId, todoItemId) => {
            const confirmed = showConfirmDeleteDialog(true);
            if (confirmed) {
                alert("ok! todoId=" + todoId + ", todoItemId=" + todoItemId)
            } else {
            TodoRestApi.delete("/todos/" + todoId + "/items/" + todoItemId)
                           .then((response) => console.log(response.data))
                           .catch((error) => console.log("Error calling todo service rest api, error: " + error));

                           }
          };


    return (
        <>
        {data.map(item => (
          <tr key={item.id}>
             <td>{item.status == 'Finished' ? <CheckCircleFill /> : 'todo'}</td>
             <td>{item.name}</td>
             <td>{item.description}</td>
             <td>{item.action}</td>
             <td>{item.assignedTo}</td>
             <td>
                  <button onClick={() => navigate("/todo/" + todo.idStr + "/items")} type="button" className="btn btn-sm btn-outline-secondary">
                     <Pencil size={16} color="royalblue" />
                  </button>
                  <span>&nbsp;</span>
                  <button onClick={() => { deleteTodoItem(todoId, item.id);}} type="button" className="btn btn-sm btn-outline-secondary">
                    <Trash  size={16} color="red" />
                  </button>
             </td>
         </tr>
        ))}
        </>
    );
}

export const TodoItemTable = (todoId) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Status</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                <th scope="col">Assigned to</th>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
           { GetTodoItemData(todoId) }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
