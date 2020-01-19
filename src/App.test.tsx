import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const questionElement = getByText(/On a clear day/i);
  expect(questionElement).toBeInTheDocument();
  const nextButton = getByText(/Next/i);
  expect(nextButton).toBeInTheDocument();
});
