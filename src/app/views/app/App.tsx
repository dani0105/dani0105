import React from "react";
import {
  HeaderComponent,
  NavigatorComponent,
  ProfileComponent,
  EducationComponent,
  ExperienceComponent,
  FooterComponent,
  ProjectsComponent
} from "../../components/";

export class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderComponent />
        <NavigatorComponent />
        <ProfileComponent />
        <ExperienceComponent />
        <EducationComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    );
  }

}
