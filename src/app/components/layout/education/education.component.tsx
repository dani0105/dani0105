import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineEnvironment } from "react-icons/ai";
import { } from './education.styles';

const EducationList = [
  { date: "2019 - Presente", place: "Campus Local San Carlos", title: "Bachillerato en Computación", description: "En la universidad aprendí las bases de la ingeniería de software tales como: Estructuras de datos, POO, Aseguramiento de la calidad y Patrones de diseño.", entity: "Tecnológico de Costa Rica" },

  { date: "Marzo 2017 - Diciembre 2017", place: "Sede Regional San Carlos", title: "Diseño Página Web (curso)", description: "En este curos tuve mi primer acercamiento a la programación web, aprendí PHP y JavaScript, además del uso de Laravel, JQuery y Bootstrap.", entity: "Universidad Técnica Nacional" },

  { date: "2013-2018", place: "San Carlos", title: "Técnico Medio en Redes", description: "Aquí realice todos mis años de colegio en la especialidad de informática donde obtuve mi primer acercamiento a la programación.", entity: "Colegio Técnico Profesional Aguas Zarcas" },
]

export class EducationComponent extends React.Component {

  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="education">
        <Row className="mb-5">
          <Col>
            <h1 className="section-title mb-sm-5">Educación</h1>
          </Col>
        </Row>
        {EducationList.map(element => (
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
