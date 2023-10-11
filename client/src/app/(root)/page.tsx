'use client';
import React, { useEffect } from 'react';
import VideoList from '@/components/pages/home/video/video-list';
import { useCommonDataContext, useWebSocket } from '@/contexts';

if (process.env.NEXT_PUBLIC_IS_MOCK_API) {
    const { worker } = require('@/mocks/browser');
    worker.start();
}

export default function Home() {
    const { setVideoNotification } = useCommonDataContext();
    const { socket } = useWebSocket();

    useEffect(() => {
        socket.on('receive_message', (data: any) => {
            if (data.sender !== socket.id) {
                setVideoNotification((prev) => [...prev, data.videoNotification]);
                //fake stored data in localstorage
                const storedVideoList = JSON.parse(localStorage.getItem('videoList')!);
                storedVideoList.push(data.videoNotification);
                localStorage.setItem('videoList', JSON.stringify(storedVideoList));
            }
        });
    }, [socket]);

    console.log(socket);
    return (
        <div className="w-full pt-6">
            <VideoList />
        </div>
    );
}
