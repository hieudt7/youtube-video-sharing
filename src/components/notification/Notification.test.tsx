import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Notification from './Notification';

jest.mock('@/contexts', () => ({
  useCommonDataContext: () => ({
    videoNotification: [
      {
        id: 1,
        author: {
          username: 'testuser',
          avatar: 'avatar-url',
        },
        title: 'Notification Title',
        createTime: '2023-10-11T12:00:00',
      },
    ],
  }),
}));

describe('Notification', () => {
  it('should render with badge and menu', () => {
    render(<Notification />);

    const badge = screen.getByRole('button', {
      name: /notification/i,
    });
    expect(badge).toBeInTheDocument();
  });

  it('should toggle menu when clicked', () => {
    render(<Notification />);

    const menuButton = screen.getByRole('button', {
      name: /notification/i,
    });
    fireEvent.click(menuButton);

    const menuItem = screen.queryByText('Notification Title');
    expect(menuItem).toBeInTheDocument();

    const closeMenu = screen.getByTestId('notification-menu-item');
    fireEvent.click(closeMenu);

    const closedMenuItem = screen.queryByText('Notification Title');
    expect(closedMenuItem).toBeNull();
  });

  it('should display the notification details', () => {
    render(<Notification />);

    const menuButton = screen.getByRole('button', {
      name: /notification/i,
    });
    fireEvent.click(menuButton);

    const title = screen.getByText('Notification Title');
    expect(title).toBeInTheDocument();

    const author = screen.getByText('testuser');
    expect(author).toBeInTheDocument();

    const timestamp = screen.getByText('11/10/2023 12:00');
    expect(timestamp).toBeInTheDocument();
  });
});
