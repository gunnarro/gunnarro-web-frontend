//import { useTranslation } from 'react-i18next';

// bootstrap import
import Card from 'react-bootstrap/Card';

export const Employee = () => {

//    const { t } = useTranslation()

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
                      <h6>page.employee.role.ceo</h6>
                   </Card.Title>
                   <ul>
                      <li><a href="/public/cv(id=guro)"><span>page.employee.cv</span></a></li>
                      <li><a href="/public/cv/projects(id=guro)"><span>page.employee.projects</span></a></li>
                   </ul>
                </Card.Body>
             </div>
          </div>
       </Card>
    </Card.Body>
    )
}