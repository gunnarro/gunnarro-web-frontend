import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';

export const Home = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <Card.Header>
         <h3>{t('home')}</h3>
        </Card.Header>
            <Card.Body>
            </Card.Body>
     </Card>
    )
}