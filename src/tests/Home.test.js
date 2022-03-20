import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './mocks/renderWithRouter';
import Home from '../pages/Home';

describe('3 - Home', () => {
  beforeEach(() => {
    renderWithRouter(<Home />);
  });

  describe('Render Home', () => {
    it('3.1 - Render list title.', () => {
      const listTitle = screen.getByText(/Afazeres:/);

      expect(listTitle).toBeInTheDocument();
    });

    it('3.2 - Render input to task name.', () => {
      const placeholder = screen.getByPlaceholderText('Tarefa...');

      expect(placeholder).toBeInTheDocument();
    });

    it('3.3 - Render submit task button.', () => {
      const listIt = screen.getByRole('button', { name: 'Listar!' });

      expect(listIt).toBeInTheDocument();
    });

    it('3.4 - Render start buttons.', () => {
      const three = 3;

      const totalButtoms = screen.getAllByRole('button');

      expect(totalButtoms).toHaveLength(three);
    });

    it('3.5 - Render list management buttons.', () => {
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
});
