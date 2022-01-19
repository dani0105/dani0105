import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineComponent } from "../timeline/timeline.component";
import {i18n} from '../../../i18n/i18n';
export class ExperienceComponent extends React.Component{

  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="experience">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">{i18n.experience.sectionName}</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TimelineComponent data={i18n.experience.list} intercalate={true} left={true}/>
          </Col>
        </Row>
      </Container>
    );
  }

}
