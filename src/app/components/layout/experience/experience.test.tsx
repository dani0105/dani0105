import React from 'react';
import { render, screen } from '@testing-library/react';
import {ExperienceComponent} from './experience.component';

test('renders learn react link', () => {
  render(<ExperienceComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
