import { useState, useEffect } from "react";
import { PropTypes } from 'prop-types';
// project import
import { TodoRestApi } from '../services/TodoRestApi';

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);npm start
function GetTodoHistoryData({ todoId }) {
    GetTodoHistoryData.propTypes = {
        todoId: PropTypes.PropTypes.isRequired
    };
    const [todoHistoryListData, setTodoHistoryListData] = useState([]);
    // load data
    useEffect(() => {
      TodoRestApi.get('/todos/' + todoId + "/history")
        .then(response => {
            setTodoHistoryListData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    return (
        <>
        {todoHistoryListData.map(todoHistory => (
          <tr key={todoHistory.id}>
               <td>{todoHistory.revisionId}</td>
               <td>{todoHistory.revisionType}</td>
               <td>{todoHistory.name}</td>
               <td>{todoHistory.description}</td>
               <td>{todoHistory.status}</td>
               <td>{todoHistory.createdDate}</td>
               <td>{todoHistory.lastModifiedDate}</td>
               <td>{todoHistory.createdByUser}</td>
               <td>{todoHistory.lastModifiedByUser}</td>
         </tr>
        ))}
        </>
    );
}

export const TodoHistoryTable = (todoId) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Revision</th>
                <th scope="col">Revision type</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Created date</th>
                <th scope="col">Last modified date</th>
                <th scope="col">Created by</th>
                <th scope="col">Last modified by</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
           { GetTodoHistoryData(todoId) }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
