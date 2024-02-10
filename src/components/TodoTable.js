import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// bootstrap import
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from 'components/TodoRestApi';

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);npm start
function getTodosData({ userName }) {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
      TodoRestApi.get('/todos/user/' + userName)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    const deleteTodo = (todoId) => {
        TodoRestApi.delete("/todos/" + todoId)
                       .then((response) => console.log(response.data))
                       .catch((error) => console.log("Error calling todo service rest api, error: " + error));
      };

    return (
        <>
        {data.map(todo => (
          <tr key={todo.id}>
             <td>{todo.idStr}</td>
             <td>{todo.status == 'Active' ? <CheckSquareFill /> : <ArrowDownLeftCircle />}</td>
             <td>{todo.name}</td>
             <td>{todo.description}</td>
             <td>{todo.createdByUser}</td>
             <td>{todo.lastModifiedByUser}</td>
             <td>{todo.createdDate}</td>
             <td>{todo.lastModifiedDate}</td>
             <td>
                 <Pencil size={16} /><span>&nbsp;</span><Trash size={16} />
                 <button onClick={() => navigate("/todo/" + todo.id + "/details")} className="btn">view</button>
                 <button className="btn" onClick={() => {
                            deleteTodo(todo.idStr);
                          }}
                 >delete</button>
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
