import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';

test('renders the question text', () => {
  const {queryByText} = render(<Question />);
  expect(queryByText(/clear day/i)).toBeTruthy;
  expect(queryByText(/your dagger/i)).toBeTruthy;
  expect(queryByText(/next/i)).toBeTruthy;
});
