import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineComponent } from "../timeline/timeline.component";
import { } from './projects.styles';

const Projects = [
  {title:"Cumplimientool", content:"Es un sistema que permite a los clientes de una empresa de asesoría legal poder revisar qué requisitos legales deben cumplir, validar su cumplimiento, monitoreo de actualizaciones en la legislación y llevar un control  de sus permisos ",link:"https://cumplimientool.com/login"},
  {title:"Blacksmithmod", content:"Desarrollo este mod de Minecraft  en mi tiempo libre. Este mod agrega un pequeño sistema de herrería al juego con el cual los jugadores pueden crear nuevos escudos y armaduras de caballos.", link:"https://www.curseforge.com/minecraft/mc-mods/blacksmith"},
]

export class ProjectsComponent extends React.Component {

  render() {
    return (
      <Container className="mt-5 pb-5 mb-sm-3" id="projects">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">Proyectos</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TimelineComponent data={Projects} intercalate={false} left={true}/>
          </Col>
        </Row>
      </Container>
    );
  }

}
