import React from "react";
import { Button, Container } from "./navigator.styles";
import { matchPath } from "react-router";

const Routes = [
  {link:"#profile", name:"Perfil", aria:"perfile"},
  {link:"#experience", name:"Experiencia", aria:"Experiencia"},
  {link:"#education", name:"Educación", aria:"Educación"},
  {link:"#projects", name:"Proyectos", aria:"Proyectos"},
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
