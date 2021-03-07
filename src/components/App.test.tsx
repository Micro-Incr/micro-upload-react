import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders upload your image h1 text', () => {
  render(<App />);
  const h1Element = screen.getByText(/Upload your Image/i);
  expect(h1Element).toBeInTheDocument();
});
