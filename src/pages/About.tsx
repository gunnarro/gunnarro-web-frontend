import { useTranslation } from 'react-i18next';

// bootstrap import
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle
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
                 <div>
                     <CardTitle>Open Source projects</CardTitle>
                     <ul>
                         <li><a href="https://spring.io/projects/spring-boot">Spring Boot</a></li>
                         <li><a href="http://www.thymeleaf.org/">Thymeleaf</a></li>
                         <li><a href="https://www.mysql.com/">mysql</a></li>
                         <li><a href="https://useiconic.com/open">OpenIconic</a></li>
                     </ul>
                     <CardTitle>Platform</CardTitle>
                     <ul>
                         <li><a href="https://azure.microsoft.com/en-us/">Azure</a></li>
                         <li><a href="https://cloud.google.com/sql/">Cloud sql - experimental</a></li>
                     </ul>
                     <CardTitle>Source</CardTitle>
                     <ul>
                         <li><a href="https://github.com/gunnarro/gunnarro-web">Github</a></li>
                         <li><a href="https://hub.docker.com/r/gunnarro/gunnarro-web/">Docker hub</a></li>
                     </ul>
                     <CardTitle>Build and deploy</CardTitle>
                     <ul>
                         <li><a href="https://github.com/gunnarro/gunnarro-web/actions">Github Actions</a></li>
                         <li><a href="https://maven.apache.org/">Maven</a></li>
                         <li><a href="https://github.com/GoogleContainerTools/jib">Jib</a></li>
                         <li><a href="https://travis-ci.org/gunnarro">Travis - experimental</a></li>
                     </ul>
                     <CardTitle>Security scan</CardTitle>
                     <ul>
                         <li><a href="https://app.snyk.io/org/gunnarro">Snyk</a></li>
                     </ul>
                     <CardTitle>QA</CardTitle>
                     <ul>
                         <li><a href="https://sonarcloud.io/dashboard?id=com.gunnarro.web%3Agunnarro-web">SonarQube</a></li>
                     </ul>
                     <CardTitle>Resources</CardTitle>
                     <ul>
                         <li><a href="https://trianglify.io/">trianglify - used to generate background image</a></li>
                     </ul>
                 </div>
            </CardBody>
     </Card>
    )
}