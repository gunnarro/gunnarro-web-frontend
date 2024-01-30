import { useTranslation } from 'react-i18next';

// bootstrap import
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

export const About = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <CardHeader>
            <h3>{t('about')}</h3>
        </CardHeader>
            <CardBody>
                 <p className="card-text">This is only a react demo application for gunnarro:as, which is based on following technologies.</p>
            </CardBody>
     </Card>
    )
}