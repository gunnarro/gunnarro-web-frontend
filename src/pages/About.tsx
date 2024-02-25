import { useTranslation } from 'react-i18next';

// bootstrap import
import Card from 'react-bootstrap/Card';

export const About = () => {

    const { t } = useTranslation()

    return (
     <Card className="m-4">
        <Card.Header>
            <h3>{t('about')}</h3>
        </Card.Header>
            <Card.Body>
                 <p className="card-text">This is only a react demo application for gunnarro:as, which is based on following technologies.</p>
                 <div>
                     <Card.Title>Open Source projects</Card.Title>
                     <ul>
                         <li><a href="https://spring.io/projects/spring-boot">Spring Boot</a></li>
                         <li><a href="https://www.mysql.com/">mysql</a></li>
                         <li><a href="https://useiconic.com/open">OpenIconic</a></li>
                     </ul>
                     <Card.Title>Platform</Card.Title>
                     <ul>
                         <li><a href="https://azure.microsoft.com/en-us/">Azure</a></li>
                         <li><a href="https://cloud.google.com/sql/">Cloud sql - experimental</a></li>
                     </ul>
                     <Card.Title>Source</Card.Title>
                     <ul>
                         <li><a href="https://github.com/gunnarro/gunnarro-web-frontend">Github</a></li>
                         <li><a href="https://hub.docker.com/u/gunnarro">Docker hub</a></li>
                     </ul>
                     <Card.Title>Build and deploy</Card.Title>
                     <ul>
                         <li><a href="https://github.com/gunnarro/gunnarro-web-frontend/actions">Github Actions</a></li>
                         <li><a href="https://maven.apache.org/">Maven</a></li>
                         <li><a href="https://github.com/GoogleContainerTools/jib">Jib</a></li>
                     </ul>
                     <Card.Title>Security scan</Card.Title>
                     <ul>
                         <li><a href="https://app.snyk.io/org/gunnarro">Snyk</a></li>
                     </ul>
                     <Card.Title>QA</Card.Title>
                     <ul>
                         <li><a href="https://sonarcloud.io/dashboard?id=com.gunnarro.web%3Agunnarro-web">SonarQube</a></li>
                     </ul>
                     <Card.Title>Resources</Card.Title>
                     <ul>
                         <li><a href="https://trianglify.io/">trianglify - used to generate background image</a></li>
                     </ul>
                 </div>
            </Card.Body>
     </Card>
    )
}