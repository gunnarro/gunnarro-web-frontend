// react import

// bootstrap import
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

// project import
//import { DynamicTable } from 'components/DynamicTable';
//import { TableDataForm } from 'components/TableDataForm';
//import {DataTable, Column} from 'react';

import { DynamicTable } from 'components/DynamicTable';



export const ToDo = () => {
    return (
        <Card className="m-4">
        <CardHeader>
         <h3>B39 inventar liste</h3>
        </CardHeader>
            <CardBody>
                <DynamicTable />
            </CardBody>
        </Card>
    )
}