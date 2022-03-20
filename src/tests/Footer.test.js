import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('2 - Render Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('2.1 - Render header title.', () => {
    const trybeLink = screen.getByRole('link', { name: /trybe!/i });

    expect(trybeLink).toBeInTheDocument();
  });

  it('2.2 - Render header title.', () => {
    const cAndStack = screen.getByText(
      /2021 > feito por nathan nunes, com react, fontawesome, uniqid, jquery e 💚\./i,
    );

    expect(cAndStack).toBeInTheDocument();
  });

  it('2.3 - Render contacts link.', () => {
    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    const github = screen.getByRole('link', { name: /github/i });
    const portifólio = screen.getByRole('link', { name: /portifólio online/i });

    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(portifólio).toBeInTheDocument();
  });
});
