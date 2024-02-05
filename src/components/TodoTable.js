import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// rest support
import axios from "axios";
// bootstrap import
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle } from 'react-bootstrap-icons'

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
//const [data, setData] = useState([]);npm start
function getTodosData({ userName }) {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
      todoRestApi.get('/todos/user/' + userName)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    return (
        <>
        {data.map(item => (
          <tr key={item.id}>
             <td>{item.id}</td>
             <td>{item.status == 'Active' ? <CheckSquareFill /> : <ArrowDownLeftCircle />}</td>
             <td>{item.name}</td>
             <td>{item.description}</td>
             <td>{item.createdByUser}</td>
             <td>{item.lastModifiedByUser}</td>
             <td>{item.createdDate}</td>
             <td>{item.lastModifiedDate}</td>
             <td>
                 <Pencil size={16} /><span>&nbsp;</span><Trash size={16} />
                <button onClick={() => navigate("/todo/" + item.id + "/details")} className="btn">view</button>
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
