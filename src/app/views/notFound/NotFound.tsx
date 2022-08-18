import React from 'react';
import { i18n } from '../../i18n/i18n';

export class NotFound extends React.Component {
  render() {
    return (<h1>{i18n.notFound.title}</h1>);
  }
}
