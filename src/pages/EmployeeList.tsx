//import { useTranslation } from 'react-i18next';
import { Employee } from "./Employee"
// bootstrap import
import {
  Card,
  CardHeader
} from 'reactstrap';

export const EmployeeList = () => {

//    const { t } = useTranslation()

    return (
        <Card className="m-3">
            <CardHeader><h3>page.employees.title</h3></CardHeader>
            <Employee />
        </Card>
    )
}