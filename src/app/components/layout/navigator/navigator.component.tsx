import React from "react";
import { Button, Container } from "./navigator.styles";
import {i18n} from '../../../i18n/i18n';

const Routes = [
  {link:"#profile", name:i18n.profile.sectionName, aria:i18n.profile.sectionName},
  {link:"#experience", name:i18n.experience.sectionName, aria:i18n.experience.sectionName},
  {link:"#education", name:i18n.education.sectionName, aria:i18n.education.sectionName},
  {link:"#projects", name:i18n.projects.sectionName, aria:i18n.projects.sectionName},
]
interface State{
  currentHash:string
}

export class NavigatorComponent extends React.Component<any,State>{

  constructor(props:any){
    super(props);
    this.state = {currentHash:window.location.hash};
    
  }

  componentDidMount(){
    window.addEventListener('hashchange',(e:Event)=>{
      this.setState({currentHash:window.location.hash});
    })
  }

  private mathRoute(router:string){
    return this.state.currentHash == router;
  }

  render() {
    return (
      <Container >
        {Routes.map(route => (
          <Button key={route.link} href={route.link} className={this.mathRoute(route.link)?"active":""}>
            {route.name}
          </Button>
        ))}
      </Container>
    );
  }

}
