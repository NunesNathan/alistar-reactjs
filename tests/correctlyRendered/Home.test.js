import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../mocks/renderWithRouter';
import Home from '../../src/pages/Home';

describe('1 - Render Home', () => {
  beforeEach(() => {
    renderWithRouter(<Home />);
  });

  it('1.1 - Render title list', () => {
    const paragraph = screen.getByText(/Afazeres:/);

    expect(paragraph).toBeInTheDocument();
  });
  it('1.2 - Render input to task name', () => {
    const paragraph = screen.getByRole('textbox', {
      name: 'taskInput',
    });

    expect(paragraph).toBeInTheDocument();
  });
});
