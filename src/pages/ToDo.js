import { React } from 'react';

import { DynamicTable } from 'components/DynamicTable';
import { TableDataForm } from 'components/TableDataForm';

export const ToDo = () => (
<div className="container">
    <div className="m-3 card">
        <h3 className="card-header">B39 inventar liste</h3>
        <div className="card-body">
            <TableDataForm />
            <DynamicTable />
        </div>
    </div>
</div>
)