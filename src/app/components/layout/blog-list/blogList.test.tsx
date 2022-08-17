import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlogListComponent } from './blogList.component';

const DATA = [
  { tittel: 'Prueba' }
];

test('renders learn react link', () => {
  render(<BlogListComponent items={DATA} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
