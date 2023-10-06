'use client';
import React from 'react';
import VideoList from '@/components/pages/home/video/video-list';
export default function Home() {
    const mockdata = [
        {
            id: '4788643130513920',
            title: 'Một Cái Kết Buồn Cho Gojo Satoru😢',
            cover: 'https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg',
            view: 4900,
            duration: '0:42',
            likes: 412,
            dislikes: 110,
            author: {
                id: '1397653875',
                avatar: 'https://pic.bstarstatic.com/face/25ada11d6a5100848067f769be3fb3cd12510b49.jpg',
                nickname: 'Mon Wibu ヅ',
            },
            isTrending: false,
        },
        {
            id: '4788643130513920',
            title: 'Một Cái Kết Buồn Cho Gojo Satoru😢',
            cover: 'https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg',
            view: 4900,
            duration: '0:42',
            likes: 412,
            dislikes: 110,
            author: {
                id: '1397653875',
                avatar: 'https://pic.bstarstatic.com/face/25ada11d6a5100848067f769be3fb3cd12510b49.jpg',
                nickname: 'Test name 2',
            },
            isTrending: false,
        },
    ];
    return (
        <div className="w-full">
            <h3>Recommended for You</h3>
            <VideoList data={mockdata} />
        </div>
    );
}
