import React from 'react';
import { BlogItemComponent } from '../blog-item/blogItem.component';
import {
  Container
} from './blogList.styles';

interface Props {
  items: any[]
}

export class BlogListComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <Container>
          {this.props.items.map((e) => <BlogItemComponent key={e.id} item={e} />)}
        </Container>

      </div>
    );
  }
}
