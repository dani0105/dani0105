import React from 'react';
import { render, screen } from '@testing-library/react';
import {TimelineComponent} from './timeline.component';

test('renders learn react link', () => {
  render(<TimelineComponent data={[]} intercalate={false} left={true} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
