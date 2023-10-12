import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import RegisterDialog from './RegisterDialog';

jest.mock('@/contexts', () => ({
    useAuthContext: () => ({
        signUp: signUpMockFn,
    }),
}));

const signUpMockFn = jest.fn();
const closeMenuItem = jest.fn();

describe('RegisterDialog', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render the dialog when Register button is clicked', () => {
        render(<RegisterDialog closeMenuItem={closeMenuItem} />);

        fireEvent.click(screen.getByText('Register'));
        expect(screen.getByText('User Register form')).toBeInTheDocument();
    });

    it('should toggle dialog when the button is clicked', async () => {
        render(<RegisterDialog closeMenuItem={closeMenuItem} />);

        const openButton = screen.getByText('Register');
        expect(screen.queryByText('User Register form')).toBeNull();
        fireEvent.click(openButton);

        await waitFor(() => {
            expect(screen.queryByText('User Register form')).toBeInTheDocument();
        });

        const closeButton = screen.getByText('Cancel');
        fireEvent.click(closeButton);
        expect(closeMenuItem).toHaveBeenCalled();

        await waitFor(() => {
            expect(screen.queryByText('User Register form')).toBeNull();
        });
    });

    it('should call the signUp function with valid data', async () => {
        render(<RegisterDialog closeMenuItem={closeMenuItem} />);

        fireEvent.click(screen.getByText('Register'));
        expect(screen.getByText('User Register form')).toBeInTheDocument();

        const emailInput = screen.getByLabelText('Email*');
        const userInput = screen.getByLabelText('username*');
        const passwordInput = screen.getByLabelText('Password*');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password*');
        const registerButton = screen.getByTestId('submit-register-button');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(userInput, { target: { value: 'user name' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.change(confirmPasswordInput, { target: { value: '123456' } });
        fireEvent.click(registerButton);

        await waitFor(() => {
            expect(signUpMockFn).toHaveBeenCalled();
        });
    });

    it('should display error messages when data is invalid', async () => {
        render(<RegisterDialog closeMenuItem={closeMenuItem} />);

        fireEvent.click(screen.getByText('Register'));
        expect(screen.getByText('User Register form')).toBeInTheDocument();

        const emailInput = screen.getByLabelText('Email*');
        const userInput = screen.getByLabelText('username*');
        const passwordInput = screen.getByLabelText('Password*');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password*');
        const registerButton = screen.getByTestId('submit-register-button');

        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(userInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: '' } });
        fireEvent.change(confirmPasswordInput, { target: { value: '' } });
        fireEvent.click(registerButton);

        await waitFor(() => {
            expect(signUpMockFn).not.toHaveBeenCalled();
        });

        await waitFor(() => {
            expect(screen.getByText('Email is required')).toBeInTheDocument();
            expect(emailInput.parentNode).toHaveClass('Mui-error');

            expect(screen.getByText('Username is required')).toBeInTheDocument();
            expect(userInput.parentNode).toHaveClass('Mui-error');

            expect(screen.getByText('Password is required')).toBeInTheDocument();
            expect(passwordInput.parentNode).toHaveClass('Mui-error');

            expect(screen.getByText('Confirm Password is required')).toBeInTheDocument();
            expect(confirmPasswordInput.parentNode).toHaveClass('Mui-error');
        });
    });
});
