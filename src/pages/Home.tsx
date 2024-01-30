import { useTranslation } from 'react-i18next';

// bootstrap import
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

export const Home = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <CardHeader>
         <h3>{t('home')}</h3>
        </CardHeader>
            <CardBody>
            </CardBody>
     </Card>
    )
}