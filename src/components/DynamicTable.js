import { React } from 'react';

export const DynamicTable = () => (
<div className="container">
    <div className="card m-3">
        <h3 className="card-header">B39 inventar liste</h3>
        <div className="card-body">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Inventar</th>
                    <th scope="col">Handling</th>
                    <th scope="col">Stein</th>
                    <th scope="col">Siri</th>
                    <th scope="col">Gunnar</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">Støvsuger</th>
                        <td>selges</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
)