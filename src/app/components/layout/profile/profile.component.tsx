import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export class ProfileComponent extends React.Component {

  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="profile">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">Perfil</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="9">
            <p className="text text-start">
              ¡Hola! soy Daniel, un desarrollado web. Me encanta desarrollar páginas web y aplicaciones móvil de todo tipo. Me gusta descubrir nuevas tecnologías y técnicas front-end y back-end.
            </p>
            <p className="text text-start">
              Cuando no estoy programado, estoy disfrutando de mis hobbies como los videojuegos, bordado y ciclismo.
            </p>
          </Col>
          <Col md="3">

          </Col>
        </Row>
      </Container>
    );
  }

}
