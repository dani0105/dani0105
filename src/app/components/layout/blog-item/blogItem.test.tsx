import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlogItemComponent } from './blogItem.component';

const ITEM = {};

test('renders learn react link', () => {
  render(<BlogItemComponent item={ITEM} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
