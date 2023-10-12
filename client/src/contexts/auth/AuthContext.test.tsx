import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { useAuthContext, AuthContextProvider } from './AuthContext';

jest.mock('@/services/authentication', () => ({
    login: jest.fn(),
    register: jest.fn(),
    signOut: jest.fn(),
}));

toast.error = jest.fn();
toast.success = jest.fn();

function TestComponent() {
    const { signIn, signOut, signUp } = useAuthContext();

    const handleSignInClick = async () => {
        try {
            signIn('test@sample.com', 'password');
        } catch (e) {}
    };
    const handleSignOutClick = () => {
        signOut();
    };
    const handleSignUpClick = async () => {
        try {
            signUp('test@sample.com', 'username', 'password');
        } catch (e) {}
    };

    return (
        <div>
            <button onClick={handleSignInClick} data-testid="auth-signIn-button">
                Test signIn
            </button>
            <button onClick={handleSignUpClick} data-testid="auth-signUp-button">
                Test signUp
            </button>
            <button onClick={handleSignOutClick} data-testid="auth-signOut-button">
                Test signOut
            </button>
        </div>
    );
}

describe('AuthContext', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render normal', () => {
        render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );
    });

    it('should call login endpoint', async () => {
        render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );

        const signIn = screen.getByTestId('auth-signIn-button');
        expect(signIn).toBeInTheDocument();
        fireEvent.click(signIn);

        await waitFor(() => {
            expect(require('@/services/authentication').login).toHaveBeenCalledTimes(1);
        });
    });

    it('should call register endpoint', async () => {
        render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );

        const signUp = screen.getByTestId('auth-signUp-button');
        expect(signUp).toBeInTheDocument();
        fireEvent.click(signUp);

        await waitFor(() => {
            expect(require('@/services/authentication').register).toHaveBeenCalledTimes(1);
        });
    });

    it('should call sigout when click', async () => {
        render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );
        const signOutButton = screen.getByTestId('auth-signOut-button');
        expect(signOutButton).toBeInTheDocument();
        fireEvent.click(signOutButton);
    });
});
