import React from 'react';
import { Container, Button } from './navigator.styles';
import { i18n } from '../../../i18n/i18n';

const Routes = [
  { link: '#profile', name: i18n.profile.sectionName, aria: i18n.profile.sectionName },
  { link: '#experience', name: i18n.experience.sectionName, aria: i18n.experience.sectionName },
  { link: '#education', name: i18n.education.sectionName, aria: i18n.education.sectionName },
  { link: '#projects', name: i18n.projects.sectionName, aria: i18n.projects.sectionName }
];
interface State{
  currentHash:string
}

export class NavigatorComponent extends React.Component<any, State> {
  render() {
    return (
      <Container>
        {Routes.map((route) => (
          <Button smooth key={route.link} to={route.link}>
            {route.name}
          </Button>
        ))}
      </Container>
    );
  }
}
