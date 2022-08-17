import React from 'react';
import { NavLink } from 'react-router-dom';
import { i18n } from '../../../i18n/i18n';
import {
  Card,
  Img,
  Date,
  Tittle,
  Summary,
  CardBody
} from './blogItem.styles';

interface Props {
  item: any
}

export class BlogItemComponent extends React.Component<Props> {
  formatDate = (date: Date): string => date.toLocaleString(i18n.getLanguage(), { month: 'long', day: 'numeric', year: 'numeric' });

  postLink = (id: string): string => `/blog/${id}`;

  render() {
    return (
      <Card>
        <NavLink className="link" to={this.postLink(this.props.item.id)}>
          <Img alt={this.props.item.tittle} src={this.props.item.image} />
          <CardBody className="p-3">
            <Tittle>
              {this.props.item.title}
            </Tittle>
            <Summary>
              {this.props.item.summary}
            </Summary>
            <Date>
              {this.formatDate(this.props.item.created_at)}
            </Date>
          </CardBody>
        </NavLink>
      </Card>
    );
  }
}
