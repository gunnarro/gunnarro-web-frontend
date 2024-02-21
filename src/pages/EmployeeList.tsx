//import { useTranslation } from 'react-i18next';
import { Employee } from "./Employee"
// bootstrap import
import Card from 'react-bootstrap/Card';

export const EmployeeList = () => {

//    const { t } = useTranslation()

    return (
        <Card className="m-3">
            <Card.Header><h3>page.employees.title</h3></Card.Header>
            <Employee />
        </Card>
    )
}