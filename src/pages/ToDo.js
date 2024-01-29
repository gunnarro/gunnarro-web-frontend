import { DynamicTable } from 'components/DynamicTable';
import { TableDataForm } from 'components/TableDataForm';

export const ToDo = () => (
<div class="container">
    <div class="m-3 card">
        <h3 class="card-header">B39 inventar liste</h3>
        <div class="card-body">
            <TableDataForm />
            <DynamicTable />
        </div>
    </div>
</div>
)