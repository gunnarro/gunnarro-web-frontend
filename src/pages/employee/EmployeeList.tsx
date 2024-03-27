import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';
// project import
import { Employee } from "./Employee"

export const EmployeeList = () => {

    const { t } = useTranslation()

    return (
        <Card className="m-3">
            <Card.Header><h3>{t('employees')}</h3></Card.Header>
            <Employee />
        </Card>
    )
}