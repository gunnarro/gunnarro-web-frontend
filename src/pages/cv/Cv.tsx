import { useTranslation } from 'react-i18next';
// bootstrap import
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
// project import
import { CvHeader } from './CvHeader';
import { CvSkills } from './CvSkills';
import { CvExperience } from './CvExperience';
import { CvEducation } from './CvEducation';
// css project import
import "../../assets/timeline-4-custom.css";

export const Cv = () => {

    const { t } = useTranslation()

    return (
    <Container className="container-fluid p-1">
        <CvHeader/>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h4>Skills</h4></Accordion.Header>
            <Accordion.Body>
                <CvSkills/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h4>Experience</h4></Accordion.Header>
            <Accordion.Body>
                <CvExperience/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header><h4>Education</h4></Accordion.Header>
              <Accordion.Body>
                  <CvEducation/>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </Container>
    )
}