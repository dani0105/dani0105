import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { i18n } from '../../../i18n/i18n';
import profileImage from './profile.jpg';
import { ProfileImage } from './profile.styles';

export class ProfileComponent extends React.Component {
  render() {
    return (
      <Container className="mt-5 pb-sm-5" id="profile">
        <Row>
          <Col>
            <h1 className="section-title mb-sm-5">{i18n.profile.sectionName}</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="9">
            <div className="align-middle h-100">
              <p className="text text-start">
                {i18n.profile.description1}
              </p>
              <p className="text text-start">
                {i18n.profile.description2}
              </p>
            </div>

          </Col>
          <Col md="3" className="order-first order-sm-last">
            <ProfileImage className="w-100" src={profileImage} />
          </Col>
        </Row>
      </Container>
    );
  }
}
