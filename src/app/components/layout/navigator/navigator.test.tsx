import React from 'react';
import { render, screen } from '@testing-library/react';
import {NavigatorComponent} from './navigator.component';

test('renders learn react link', () => {
  render(<NavigatorComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
