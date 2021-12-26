import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from '../mocks/renderWithRouter';
import App from '../../App';

describe('1 - Render Home', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('1.1 - Render title list.', () => {
    const paragraph = screen.getByText(/Afazeres:/);

    expect(paragraph).toBeInTheDocument();
  });
  it('1.2 - Render input to task name.', () => {
    const placeholder = screen.getByPlaceholderText('Tarefa...');

    expect(placeholder).toBeInTheDocument();
  });
  it('1.3 - Render submit task button.', () => {
    const listIt = screen.getByRole('button', { name: 'List it!' });

    expect(listIt).toBeInTheDocument();
  });
  it('1.4 - Render start buttons.', () => {
    const totalButtoms = screen.getAllByRole('button');

    const three = 3;
    expect(totalButtoms).toHaveLength(three);
  });
  it('1.5 - Render list management buttons.', () => {
    const showDetails = screen.getByRole('button', {
      name: 'Exibir Detalhes',
    });
    const clearList = screen.getByRole('button', {
      name: 'Limpar lista',
    });

    expect(showDetails).toHaveClass('col-6 btn-n-info');
    expect(clearList).toHaveClass('col-6 btn-n-danger');
  });
});
