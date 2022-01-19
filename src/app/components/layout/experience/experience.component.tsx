import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineComponent } from "../timeline/timeline.component";

const Experiences = [
  { title:"2020 - Presente", content:'Desarrollador Fullstack en Asesoría Nairí'},
  { title:"2020 - 2021", content:'Desarrollador Fullstack en Comunidad de aplicaciones móviles'}
]

export class ExperienceComponent extends React.Component{

  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="experience">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">Experiencia</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TimelineComponent data={Experiences} intercalate={true} left={true}/>
          </Col>
        </Row>
      </Container>
    );
  }

}
