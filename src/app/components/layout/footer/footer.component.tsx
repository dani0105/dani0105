import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { SubTex } from './footer.styles';
import { i18n } from '../../../i18n/i18n';

export class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="">
        <Container>
          <Col>
            <Row className="justify-content-center">
              <ScrollAnimation className="large-animation" initiallyVisible={false} animateOnce animateIn="fadeInLeftBig">
                <h1 className="text-center text fst-italic fw-normal">
                  “
                  {i18n.footer.quote}
                  ”
                </h1>
                <h1 className="text text-center fw-normal">
                  -
                  {i18n.footer.quoteAuthor}
                </h1>
              </ScrollAnimation>
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-center p-sm-2">
              <hr />
              <SubTex className="text-center">Copyright © 2022 Daniel Rojas</SubTex>
            </Row>
          </Col>
        </Container>
      </footer>
    );
  }
}
