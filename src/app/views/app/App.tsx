import React from 'react';
import { Helmet } from 'react-helmet';
import {
  HeaderComponent,
  NavigatorComponent,
  ProfileComponent,
  EducationComponent,
  ExperienceComponent,
  FooterComponent,
  ProjectsComponent
} from '../../components';
import { i18n } from '../../i18n/i18n';

const ROUTES = [
  {
    link: '#profile', name: i18n.profile.sectionName, aria: i18n.profile.sectionName, isLink: false
  },
  {
    link: '#experience', name: i18n.experience.sectionName, aria: i18n.experience.sectionName, isLink: false
  },
  {
    link: '#education', name: i18n.education.sectionName, aria: i18n.education.sectionName, isLink: false
  },
  {
    link: '#projects', name: i18n.projects.sectionName, aria: i18n.projects.sectionName, isLink: false
  },
  {
    link: 'https://blog.danielrojas.website/', name: i18n.blog.sectionName, aria: i18n.blog.sectionName, isLink: true
  }
];

export class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Daniel Rojas Rodriguez - Curriculum Interactivo</title>
          <meta name="description" content="Hola!, Esta es mi página web y espero que les guste." />
          <meta name="keywords" content="Daniel Rojas, Interactive Resume, programmer, Web developer, Interactive CV, Resume, CV, HRMatches, Curriculum interactivo, programador, Desarrollador web, dani0105, daniel, rojas" />
        </Helmet>
        <HeaderComponent />
        <NavigatorComponent routes={ROUTES} />
        <ProfileComponent />
        <ExperienceComponent />
        <EducationComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    );
  }
}
