import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should renders links and copyright text', () => {
    render(<Footer />);

    const privacyLink = screen.getByRole('link', { name: /Privacy/i });
    expect(privacyLink).toHaveTextContent('Privacy');
    expect(privacyLink).toHaveAttribute('href', '#');

    const termsLink = screen.getByRole('link', { name: /Terms/i });
    expect(termsLink).toHaveTextContent('Terms');
    expect(termsLink).toHaveAttribute('href', '#');

    const copyrightText = screen.getByText('Copyright © 2023. All Rights Reserved.');
    expect(copyrightText).toBeInTheDocument();
  });
});
