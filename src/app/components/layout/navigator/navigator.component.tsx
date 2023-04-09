import React from 'react';
import { Container, HashLink, A } from './navigator.styles';

interface State {
  currentHash: string
}

interface Props {
  routes: any
}

export class NavigatorComponent extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        {this.props.routes.map((route: any) => (route.isLink
          ? (
            <A href={route.link}>
              {route.name}
            </A>
          )
          : (
            <HashLink smooth key={route.link} to={route.link}>
              {route.name}
            </HashLink>
          )
        ))}
      </Container>
    );
  }
}
