'use client';
import React from 'react';
import VideoList from '@/components/pages/home/video/video-list';

if (process.env.NEXT_PUBLIC_IS_MOCK_API) {
    const { worker } = require('@/mocks/browser');
    worker.start();
}

export default function Home() {
    return (
        <div className="w-full pt-6">
            <VideoList/>
        </div>
    );
}
