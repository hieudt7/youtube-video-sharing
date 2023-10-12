import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { useAuthContext } from '@/contexts'; 
import LeftSideBar from './LeftSideBar';

jest.mock('@/contexts/auth/AuthContext');

describe('LeftSideBar Component', () => {
  it('should renders normal', () => {
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<LeftSideBar />);

    const homeMenuItem = screen.getByText('Home');
    expect(homeMenuItem).toBeInTheDocument();

    const trendingMenuItem = screen.getByText('Trending');
    expect(trendingMenuItem).toBeInTheDocument();

    const musicMenuItem = screen.getByText('Music');
    expect(musicMenuItem).toBeInTheDocument();

    const liveMenuItem = screen.getByText('LIVE');
    expect(liveMenuItem).toBeInTheDocument();
  });

  it('should click on menu items', () => {
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<LeftSideBar />);

    const homeMenuItem = screen.getByText('Home');
    fireEvent.click(homeMenuItem);
  });

  it('should displays login button when not authenticated', () => {
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: false, user: null, signOut: jest.fn() });

    render(<LeftSideBar />);

    const loginText = screen.getByText('Log in to view your "Followed" content.');
    expect(loginText).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: 'Log in' });
    expect(loginButton).toBeInTheDocument();
  });

  it('opens login dialog when the login button is clicked', () => {
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: false });

    render(<LeftSideBar />);

    const loginButton = screen.getByRole('button', { name: 'Log in' });
    fireEvent.click(loginButton);
  });
});
