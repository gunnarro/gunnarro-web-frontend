import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo page', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});

test('render about page', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

