import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { PropTypes } from 'prop-types';
// bootstrap import
import { Trash, Pencil, CheckSquareFill, ArrowDownLeftCircle } from 'react-bootstrap-icons'
// project import
import { TodoRestApi } from '../services/TodoRestApi';
import { showConfirmDeleteDialog } from '../components/ConfirmModalDialog';
// todo rest api import
import { AdminServiceApiFactory, Configuration } from "../generated/client/adminservice";
import { UserDto, ErrorResponse } from "../generated/client/adminservice/model";

// To keep things simple, we'll store the returned Rest Api data in the React local state.
// The initial value is an empty array.
//const [data, setData] = useState([]);npm start
function GetUsersData() {
    const navigate = useNavigate()
    const [userListData, setUserListData] = useState([]);
    const todoApi = AdminServiceApiFactory(new Configuration(), "", TodoRestApi);
    // load data
    useEffect(() => {
      todoApi.getUsers()
        .then(response => {
            setUserListData(response.data);
        })
        .catch(error => {
          console.log("Error calling todo service rest api, error" + error);
        });
    }, []);

    return (
        <>
        {userListData != null && userListData.map(user => (
          <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.userName}</td>
               <td>{user.email}</td>
               <td>{user.active}</td>
         </tr>
        ))}
        </>
    );
}

export const UsersTable = () => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Active</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
           { GetUsersData() }
        </tbody>
        <tfoot className="table-group-divider">
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
)
