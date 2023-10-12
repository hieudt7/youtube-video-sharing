import React from 'react';
import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/contexts';
import Header from './Header';

jest.mock('@/contexts/auth/AuthContext');
toast.info = jest.fn();

describe('Header Component', () => {
    it('should renders normal', async () => {
        (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: false, user: null, signOut: jest.fn() });

        render(<Header />);

        const header = screen.getByTestId('wrapp-header');
        expect(header).toBeInTheDocument();

        const unauthorizedMenu = screen.getByTestId('unauthorized-menu');
        expect(unauthorizedMenu).toBeInTheDocument();

        const searchButton = screen.getByTestId('header-search-icon');
        expect(searchButton).toBeInTheDocument();
        fireEvent.click(searchButton);

        await waitFor(() => {
            expect(toast.info).toHaveBeenCalledTimes(1);
            expect((toast.info as jest.Mock).mock.calls[0][0]).toEqual('Feature is coming soon');
        });
    });
    it('should renders the header with authenticated', () => {
        (useAuthContext as jest.Mock).mockReturnValue({
            isAuthenticated: true,
            user: { username: 'username', avatar: 'avatar' },
            signOut: jest.fn(),
        });

        render(<Header />);

        const authorziedMenu = screen.getByTestId('authorized-menu');
        expect(authorziedMenu).toBeInTheDocument();
        fireEvent.click(authorziedMenu);

        const signOutButton = screen.getByTestId('header-logout-button');
        fireEvent.click(signOutButton);

        expect(useAuthContext().signOut).toHaveBeenCalledTimes(1);
    });

});
