import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProfileComponent} from './profile.component';

test('renders learn react link', () => {
  render(<ProfileComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
