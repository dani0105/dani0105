import React from 'react';
import { render, screen } from '@testing-library/react';
import {NavigatorComponent} from './navigator.component';

const ROUTES = [
  { link: '/#profile', name: 'test', aria: 'test' }
];

test('renders learn react link', () => {
  render(<NavigatorComponent routes={ROUTES} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
