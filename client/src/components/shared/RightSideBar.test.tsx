import React from 'react';
import { render, screen } from '@testing-library/react';
import RightSideBar from './RightSideBar';

describe('LeftSideBar Component', () => {
  it('should render normal', () => {
    render(<RightSideBar />);

    const rightBar = screen.getByTestId('right-bar');
    expect(rightBar).toBeInTheDocument();
  });
});
