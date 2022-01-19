import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubTex} from "./footer.styles";

export class FooterComponent extends React.Component {

  render() {
    return (
      <footer className="">
        <Container>
          <Col>
            <Row className="justify-content-center">
              <h1 className="text-center text fst-italic fw-normal">
              “La gente normal cree que si no está roto, no lo arregles. Los ingenieros creen que si no está roto es que aún no tiene suficientes características”
              </h1>
              <h1 className="text text-center fw-normal">- Scott Adams</h1>
            
            </Row>
          </Col>
          
          <Col>
            <Row className="justify-content-center p-3">
              <hr/>
              <SubTex className="text-center">Copyright © 2022 Daniel Rojas</SubTex> 
            </Row>
          </Col>
        </Container>
      </footer>
    );
  }

}
