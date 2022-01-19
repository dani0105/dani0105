import React from 'react';
import { render, screen } from '@testing-library/react';
import {FooterComponent} from './footer.component';

test('renders learn react link', () => {
  render(<FooterComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
