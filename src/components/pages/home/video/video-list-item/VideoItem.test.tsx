import React from 'react';
import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { useCommonDataContext, useAuthContext } from '@/contexts';
import {
  type VideoInfo,
} from '@/services/video';
import VideoItem from './VideoItem';

jest.mock('@/contexts/auth/AuthContext');

jest.mock('@/contexts/common-data/CommonDataContext');

jest.mock('@/services/video', () => ({
  videoAction: jest.fn(),
  removeVideoAction: jest.fn(),
}));

toast.error = jest.fn();

const mockVideoInfo: VideoInfo = {
  id: '1',
  title: 'Sample Video',
  author: { id:'1',username: 'John Doe', avatar: 'sample-avatar-url', email: 'test@sample.com',password: 'password' },
  createTime: new Date().toISOString(),
  url: 'sample-video-url',
  cover: 'sample-cover-url',
  view: 100,
  likes: 50,
};

describe('VideoItem Component', () => {
  it('should renders video item', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn()
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<VideoItem data={mockVideoInfo} />);

    const videoItem = screen.getByTestId('video-item-box');

    expect(videoItem).toBeInTheDocument();
  });

  it('should plays video when play video button is clicked', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn()
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<VideoItem data={mockVideoInfo} />);

    const playButton = screen.getByTestId('play-video-button');
    fireEvent.click(playButton);

    const iframe = screen.getByTitle('video');
    expect(iframe).toBeInTheDocument();
  });

  it('should show message when call video action whit not authenticated ', async () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        videoActionList: [],
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: false });

    require('@/services/video').videoAction.mockResolvedValue({ id: '1', action: 'LIKE' });

    render(<VideoItem data={mockVideoInfo} />);

    const likeButton = screen.getByTestId('video-like-button');
    fireEvent.click(likeButton);

    await waitFor(() => {
        expect(require('@/services/video').videoAction).toHaveBeenCalledTimes(0);
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect((toast.error as jest.Mock).mock.calls[0][0]).toEqual('Please login to continue.');
    });
  });

  it('should Like video', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        videoActionList: [],
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    require('@/services/video').videoAction.mockResolvedValue({ id: '1', action: 'LIKE' });

    render(<VideoItem data={mockVideoInfo} />);

    const likeButton = screen.getByTestId('video-like-button');
    fireEvent.click(likeButton);

    expect(require('@/services/video').videoAction).toHaveBeenCalledWith({ payload: { id: '1', action: 'LIKE' } });
  });

  it('should remove action video', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        videoActionList: [{ id: '1', action: 'LIKE' }],
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    require('@/services/video').removeVideoAction.mockResolvedValue({ id: '1', action: 'LIKE' });

    render(<VideoItem data={mockVideoInfo} />);

    const likeButton = screen.getByTestId('video-like-button');
    fireEvent.click(likeButton);

    expect( require('@/services/video').removeVideoAction).toHaveBeenCalledWith({ payload: { id: '1', action: 'LIKE' } });
  });

  it('should disLike video', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        videoActionList: [],
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    require('@/services/video').videoAction.mockResolvedValue({ id: '1', action: 'DISLIKE' });

    render(<VideoItem data={mockVideoInfo} />);

    const likeButton = screen.getByTestId('video-dislike-button');
    fireEvent.click(likeButton);

    expect(require('@/services/video').videoAction).toHaveBeenCalledWith({ payload: { id: '1', action: 'DISLIKE' } });
  });

  it('should remove action video', () => {
    (useCommonDataContext as jest.Mock).mockReturnValue({ 
        setVideoActionList: jest.fn(),
        videoActionList: [{ id: '1', action: 'DISLIKE' }],
    });
    (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    require('@/services/video').removeVideoAction.mockResolvedValue({ id: '1', action: 'DISLIKE' });

    render(<VideoItem data={mockVideoInfo} />);

    const dislikeButton = screen.getByTestId('video-dislike-button');
    fireEvent.click(dislikeButton);

    expect( require('@/services/video').removeVideoAction).toHaveBeenCalledWith({ payload: { id: '1', action: 'DISLIKE' } });
  });
});
