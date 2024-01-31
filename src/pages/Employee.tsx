//import { useTranslation } from 'react-i18next';

// bootstrap import
import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

export const Employee = () => {

//    const { t } = useTranslation()

    return (
    <CardBody>
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
                <CardBody>
                   <CardTitle>
                      <h5>Gunnar Rønneberg</h5>
                   </CardTitle>
                   <CardTitle>
                      <h6>page.employee.role.ceo</h6>
                   </CardTitle>
                   <ul>
                      <li><a href="/public/cv(id=guro)"><span>page.employee.cv</span></a></li>
                      <li><a href="/public/cv/projects(id=guro)"><span>page.employee.projects</span></a></li>
                   </ul>
                </CardBody>
             </div>
          </div>
       </Card>
    </CardBody>
    )
}