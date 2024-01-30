// bootstrap import
import { Trash, Pencil, CheckCircleFill } from 'react-bootstrap-icons'
//import axios from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

const todoRestApi = axios.create({
  baseURL: "https://my-json-server.typicode.com/typicode/demo",
  timeout: 1000,
  headers: {'content-type': 'application/json; charset=utf-8'}
});


// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);

// Make a request for a user with a given ID
todoRestApi.get('/posts')
  .then(function (response) {
    // handle success
     console.log(response.data);
     console.log(response.status);
     console.log(response.statusText);
     console.log(response.headers);
     console.log(response.config);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function getToDos() {
    const [data, setData] = useState([]);
    useEffect(() => {
      todoRestApi.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
        {data.map(item => (
          <tr key={item.id}>
             <td>{item.title == true ? <CheckCircleFill /> : 'todo'}</td>
             <td>{item.title}</td>
             <td>{item.title}</td>
             <td>{item.title}</td>
             <td>{item.title}</td>
             <td>{item.title == true ? <CheckCircleFill /> : ''}</td>
             <td>{item.title == true ? <CheckCircleFill /> : ''}</td>
             <td>{item.title == true ? <CheckCircleFill /> : ''}</td>
             <td>
                 <Pencil size={16} />
                 <Trash size={16} />
             </td>
         </tr>
        ))}
        </>
    );
}

export const DynamicTable = () => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Status</th>
                <th scope="col">Rom</th>
                <th scope="col">Inventar</th>
                <th scope="col">Verdi</th>
                <th scope="col">Handling</th>
                <th scope="col">Stein</th>
                <th scope="col">Siri</th>
                <th scope="col">Gunnar</th>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
           { getToDos() }
        </tbody>
        <tfooter>
        </tfooter>
    </table>
)

// The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.