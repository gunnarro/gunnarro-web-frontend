// react import
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
// bootstrap import
import { Trash, Pencil, CheckCircleFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { ShowConfirmDeleteDialog } from '../components/ConfirmModalDialog';
// Todo rest api import
import { TodoServiceApiFactory, Configuration } from "../generated/client/todoservice";

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
function GetTodoItemData({ todoId }): React.ReactElement {
    GetTodoItemData.propTypes = {
        todoId: PropTypes.string.isRequired
    };
    const navigate = useNavigate();
    // load data
    const todoApi = TodoServiceApiFactory(new Configuration(), "", TodoRestApi);
     const deleteTodoItem = (todoId, todoItemId) => {
            const confirmed = ShowConfirmDeleteDialog(true);
            if (confirmed) {
                console.log("confirmed delete! todoId=" + todoId + ", todoItemId=" + todoItemId)
            } else {
                TodoRestApi.delete("/todos/" + todoId + "/items/" + todoItemId)
               .then((response) => console.log(response.data))
               .catch((error) => console.log("Error calling todo service rest api, error: " + error));
           }
          };

     if (loading) {
         return <tr><td>loading todo items for {todoId} ...</td></tr>
     }

    return (
        <>
          {
              todoData && todoData.todoItemDtoList.map(item => (
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
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                <th scope="col">Assigned to</th>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">

        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
