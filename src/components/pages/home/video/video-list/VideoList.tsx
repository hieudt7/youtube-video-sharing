'use client';
import React from 'react';
import type { VideoInfo } from '@/services/video';
type VideoListProps = {
    data: VideoInfo[];
};
import VideoItem from '../video-list-item';
export default function VideoList(props: VideoListProps) {
    const { data } = props;
    return (
        <>
            <ul className={''}>
                {data.map((item) => (
                    <li key={item.id}>
                        <VideoItem data={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}
