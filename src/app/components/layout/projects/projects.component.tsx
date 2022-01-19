import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TimelineComponent } from '../timeline/timeline.component';
import { i18n } from '../../../i18n/i18n';

export class ProjectsComponent extends React.Component {
  render() {
    return (
      <Container className="mt-5 pb-5 mb-sm-3" id="projects">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">{i18n.projects.sectionName}</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TimelineComponent data={i18n.projects.list} intercalate={false} left />
          </Col>
        </Row>
      </Container>
    );
  }
}
