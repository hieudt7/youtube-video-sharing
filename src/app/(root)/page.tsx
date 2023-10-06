'use client';
import React from 'react';
import VideoList from '@/components/pages/home/video/video-list';
export default function Home() {
    const mockdata = [
        {
            id: '4788643130513920',
            createTime:'2023-10-06T13:54:41.548Z',
            title: 'Một Cái Kết Buồn Cho Gojo Satoru😢',
            cover: 'https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg',
            view: 4900,
            duration: '0:42',
            likes: 412,
            dislikes: 110,
            author: {
                id: '1397653875',
                avatar: 'https://yt3.ggpht.com/7nNBZTf4pTbi2K2bySkVovGOwTD9WFFX2MKwA0xPteWTMt-AL8akzHVy3mntRk0EiA_hfI895og=s88-c-k-c0x00ffffff-no-nd-rj',
                nickname: 'Mon Wibu ヅ',
            },
            isTrending: false,
        },
        {
            id: '4788643130513920',
            createTime:'2023-10-09T13:54:41.548Z',
            title: 'Một Cái Kết Buồn Cho Gojo Satoru😢',
            cover: 'https://pic-bstarstatic.akamaized.net/ugc/737f23e85fd60d975a18a9fc6bae8d7e.jpg',
            view: 4900,
            duration: '0:42',
            likes: 412,
            dislikes: 110,
            author: {
                id: '1397653875',
                avatar: 'https://yt3.ggpht.com/DGr01GnA3cPYEdbECByx1Ln6NGgOhEiyNA_WyVvBGCdkV3f8oWXVr6uPBAcQ4ztd5BOD1Mtht0w=s88-c-k-c0x00ffffff-no-rj',
                nickname: 'Test name 2',
            },
            isTrending: false,
        },
    ];
    return (
        <div className="w-full pt-6">
            <VideoList data={mockdata} />
        </div>
    );
}
