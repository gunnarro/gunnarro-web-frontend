export const DynamicTable = () => (
<div class="container">
    <div class="card m-3">
        <h3 class="card-header">B39 inventar liste</h3>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Inventar</th>
                    <th scope="col">Handling</th>
                    <th scope="col">Stein</th>
                    <th scope="col">Siri</th>
                    <th scope="col">Gunnar</th>
                </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">Støvsuger</th>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                   La stå
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">La stå</a></li>
                                    <li><a class="dropdown-item" href="#">Selges</a></li>
                                    <li><a class="dropdown-item" href="#">Kastes</a></li>
                                    <li><a class="dropdown-item" href="#">Eies av</a></li>
                                    <li><a class="dropdown-item" href="#">Overtas av</a></li>
                                </ul>
                            </div>
                        </td>
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