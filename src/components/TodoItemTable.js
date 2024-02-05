import { useState, useEffect } from "react";
// rest support
import axios from "axios";
// bootstrap import
import { Trash, Pencil, CheckCircleFill } from 'react-bootstrap-icons'

const todoRestApi = axios.create({
  baseURL: "https://localhost:9999/todoservice/v1",
  timeout: 50000,
  auth: {
      username: 'my-service-name',
      password: 'change-me'
  },
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
function getTodoData({ todoId }) {
    const [data, setData] = useState([]);
    useEffect(() => {
      todoRestApi.get('/todos/' + todoId)
        .then(response => {
            //alert(response.headers['content-type'])
            //alert(JSON.stringify(response.data.toDoItemDtoList))
            setData(response.data.toDoItemDtoList);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    return (
        <>
        {data.map(item => (
          <tr key={item.uuid}>
             <td>{item.status == 'Finished' ? <CheckCircleFill /> : 'todo'}</td>
             <td>{item.name}</td>
             <td>{item.description}</td>
             <td>{item.action}</td>
             <td>{item.assignedTo}</td>
             <td>
                 <Pencil size={16} /><span>&nbsp;</span><Trash size={16} />
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
           { getTodoData(todoId) }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
