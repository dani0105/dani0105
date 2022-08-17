import React from 'react';
import { Container, Link, HashLink } from './navigator.styles';

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
            <Link key={route.link} to={route.link}>
              {route.name}
            </Link>
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
