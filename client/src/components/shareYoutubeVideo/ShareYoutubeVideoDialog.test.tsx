import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/contexts';
import ShareYoutubeVideoDialog from './ShareYoutubeVideoDialog';

jest.mock('@/contexts/auth/AuthContext');

jest.mock('@/services/video', () => ({
    shareYoutubeVideo: jest.fn(),
}));

toast.error = jest.fn();
toast.success = jest.fn();

describe('ShareYoutubeVideoDialog Component', () => {
    it('should render normal', () => {
        (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

        render(<ShareYoutubeVideoDialog />);

        expect(screen.getByLabelText('toggle share youtube video')).toBeInTheDocument();
    });

    it('should open the dialog when clicked if authenticated', () => {
        (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

        render(<ShareYoutubeVideoDialog />);

        fireEvent.click(screen.getByLabelText('toggle share youtube video'));
        expect(screen.queryByText('Share a youtube movie')).toBeInTheDocument();
    });

    it('should not open the dialog if not authenticated', () => {
        (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: false });

        render(<ShareYoutubeVideoDialog />);

        fireEvent.click(screen.getByLabelText('toggle share youtube video'));
        expect(screen.queryByText('Share a youtube movie')).not.toBeInTheDocument();
    });

    it('should close the dialog when Cancel is clicked', () => {
        (useAuthContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

        render(<ShareYoutubeVideoDialog />);

        fireEvent.click(screen.getByLabelText('toggle share youtube video'));

        fireEvent.click(screen.getByTestId('cancel-share-video-button'));
        expect(screen.queryByText('Share a youtube movie')).not.toBeInTheDocument();
    });

    it('should share a YouTube video and trigger success toast', async () => {
        const mockShareResponse = { videoNotification: {} };
        require('@/services/video').shareYoutubeVideo.mockResolvedValue(mockShareResponse);

        render(<ShareYoutubeVideoDialog />);

        fireEvent.click(screen.getByLabelText('toggle share youtube video'));

        const urlInput = screen.getByLabelText('Youtube URL*');
        fireEvent.change(urlInput, { target: { value: 'https://www.youtube.com/watch?v=abcdefghijk' } });

        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'Video Title' } });

        const thumbInput = screen.getByLabelText('Youtube thumbnail');
        fireEvent.change(thumbInput, { target: { value: 'Youtube thumbnail' } });

        const shareButton = screen.getByTestId('submit-share-video-button');
        fireEvent.click(shareButton);

        await waitFor(() => {
            expect(require('@/services/video').shareYoutubeVideo).toHaveBeenCalledTimes(1);
            expect(toast.success).toHaveBeenCalledTimes(1);
            expect((toast.success as jest.Mock).mock.calls[0][0]).toEqual('Share video successful.');
        });
    });

    it('should show error message when youtube video Id invalid', async () => {
        const mockShareResponse = { videoNotification: {} };
        require('@/services/video').shareYoutubeVideo.mockResolvedValue(mockShareResponse);

        render(<ShareYoutubeVideoDialog />);

        fireEvent.click(screen.getByLabelText('toggle share youtube video'));

        const urlInput = screen.getByLabelText('Youtube URL*');
        fireEvent.change(urlInput, { target: { value: 'https://www.youtube.com/watch?v=abcd' } });

        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'Video Title' } });

        const thumbInput = screen.getByLabelText('Youtube thumbnail');
        fireEvent.change(thumbInput, { target: { value: 'Youtube thumbnail' } });

        const shareButton = screen.getByTestId('submit-share-video-button');
        fireEvent.click(shareButton);
        
        await waitFor(() => {
            expect(require('@/services/video').shareYoutubeVideo).toHaveBeenCalledTimes(0);
            expect(toast.error).toHaveBeenCalledTimes(1);
            expect((toast.error as jest.Mock).mock.calls[0][0]).toEqual('Youtube ID is not correct! Please check again.');
        });
    });
});
