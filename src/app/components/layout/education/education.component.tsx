import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineEnvironment } from "react-icons/ai";
import { } from './education.styles';
import {i18n} from '../../../i18n/i18n';

export class EducationComponent extends React.Component {

  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="education">
        <Row className="mb-5">
          <Col>
            <h1 className="section-title mb-sm-5">{i18n.education.sectionName}</h1>
          </Col>
        </Row>
        {i18n.education.list.map(element => (
          <Row key={element.title} className="mb-5">
            <Col sm="6">
              <h1 className="title text-start">
                {element.entity}
              </h1>
              <h3 className="text text-start opacity-50 ">
                {element.date}
              </h3>
            </Col>
            <Col sm="6" className="">
              <h1 className="title text-start">
                {element.title}
              </h1>
              <div className="text d-block text-start text-sm-start">
                {element.description}
              </div>
              <div className="text primary text-start text-sm-start mt-2">
                <AiOutlineEnvironment />
                <span className="ms-3">
                  {element.place}
                </span>
                
              </div>
            </Col>
          </Row>
        ))}

      </Container>
    );
  }

}
