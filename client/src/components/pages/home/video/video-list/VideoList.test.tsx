import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useCommonDataContext, useAuthContext } from '@/contexts';
import VideoList from './VideoList'; 

jest.mock('@/contexts/auth/AuthContext');

jest.mock('@/contexts/common-data/CommonDataContext');

jest.mock('@/services/video', () => ({
  getAllVideo: jest.fn(),
}));

describe('VideoList Component', () => {
  it('should renders video list', async () => {
    const mockVideoData = [
      { id: 1, title: 'Video 1' },
      { id: 2, title: 'Video 2' },
      { id: 3, title: 'Video 3' },
    ];

    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
      isReloadVideoList: false,
      videoList: mockVideoData,
      setVideoList: jest.fn(),
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<VideoList />);

    await waitFor(() => {
      const videoItem1 = screen.getByText('Video 1');
      expect(videoItem1).toBeInTheDocument();

      const videoItem2 = screen.getByText('Video 2');
      expect(videoItem2).toBeInTheDocument();

      const videoItem3 = screen.getByText('Video 3');
      expect(videoItem3).toBeInTheDocument();
    });
  });

  it('should get video data when mounted', async () => {
    const mockVideoData = [
      { id: 1, title: 'Video 1' },
      { id: 2, title: 'Video 2' },
    ];

    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        isReloadVideoList: true,
        videoList: [],
        setVideoList: jest.fn(),
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    require('@/services/video').getAllVideo.mockResolvedValue(mockVideoData);

    render(<VideoList />);

    await waitFor(() => {
      expect(require('@/services/video').getAllVideo).toHaveBeenCalledTimes(1);
    });
  });
});
