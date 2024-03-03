import { useTranslation } from 'react-i18next';
// bootstrap import
import Card from 'react-bootstrap/Card';

export const Employee = () => {

    const { t } = useTranslation()

    return (
    <Card.Body>
       <Card className="m-3">
          <div className="row g-0">
             <div className="col-md-1 m-2">
                <img className="rounded float-start"
                alt="gunnarro ronneberg"
                src="/gunnarro-as-40.png"
                style={{
                height: 100,
                width: 100
                }}
                />
             </div>
             <div className="col-md-8">
                <Card.Body>
                   <Card.Title>
                      <h5>Gunnar Rønneberg</h5>
                   </Card.Title>
                   <Card.Title>
                      <h6>{t("ceo")}</h6>
                   </Card.Title>
                   <ul>
                      <li><a href="/employees/guro/cv"><span>{t("cv")}</span></a></li>
                      <li><a href="/employees/guro/projects"><span>{t("projects")}</span></a></li>
                      <li><a href="/employees/guro/availability"><span>{t("availability")}</span></a></li>
                   </ul>
                </Card.Body>
             </div>
          </div>
       </Card>
    </Card.Body>
    )
}