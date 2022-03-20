import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

describe('1 - Render Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('1.1 - Render header title.', () => {
    const headerTitle = screen.getByText('À listar');

    expect(headerTitle).toBeInTheDocument();
  });

  it('1.2 - Render header title.', () => {
    const slogan = screen.getByText('O seu simples organizador de tarefas!');

    expect(slogan).toBeInTheDocument();
  });
});
