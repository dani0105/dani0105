import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProjectsComponent} from './projects.component';

test('renders learn react link', () => {
  render(<ProjectsComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
