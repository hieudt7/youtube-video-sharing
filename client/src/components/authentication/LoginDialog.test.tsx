import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginDialog from './LoginDialog';

jest.mock('@/contexts', () => ({
  useAuthContext: () => ({
    signIn: signInMockFn,
  }),
}));

const signInMockFn = jest.fn();

describe('LoginDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the dialog when Log in button is clicked', () => {
    render(<LoginDialog isPrimaryButton={true} />);

    fireEvent.click(screen.getByText('Log in'));
    expect(screen.getByText('User Login form')).toBeInTheDocument();
  });

  it('should toggle dialog when the button is clicked', async () => {
    const closeMenuItem = jest.fn();

    render(
      <LoginDialog closeMenuItem={closeMenuItem} isPrimaryButton={true} />,
    );
    const openButton = screen.getByText('Log in');
    expect(screen.queryByText('User Login form')).toBeNull();
    fireEvent.click(openButton);

    await waitFor(() => {
      expect(screen.queryByText('User Login form')).toBeInTheDocument();
    });

    const closeButton = screen.getByText('Cancel');
    fireEvent.click(closeButton);
    expect(closeMenuItem).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.queryByText('User Login form')).toBeNull();
    });
  });

  it('should call the signIn function with valid data', async () => {
    render(<LoginDialog isPrimaryButton={true} />);

    fireEvent.click(screen.getByText('Log in'));

    const emailInput = screen.getByLabelText('Email*');
    const passwordInput = screen.getByLabelText('Password*');
    const loginButton = screen.getByTestId('submit-login-btn');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(signInMockFn).toHaveBeenCalled();
    });
  });

  it('should display error messages when data is invalid', async () => {
    render(<LoginDialog isPrimaryButton={true} />);
    fireEvent.click(screen.getByText('Log in'));

    const emailInput = screen.getByLabelText('Email*');
    const passwordInput = screen.getByLabelText('Password*');
    const loginBtn = screen.getByTestId('submit-login-btn');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginBtn);

    await waitFor(() => {
      expect(signInMockFn).not.toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(emailInput.parentNode).toHaveClass('Mui-error');

      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(passwordInput.parentNode).toHaveClass('Mui-error');
    });
  });
});
