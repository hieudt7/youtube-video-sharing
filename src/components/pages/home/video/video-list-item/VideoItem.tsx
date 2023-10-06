'use client';
import React from 'react';
import Image from 'next/image';

import type { VideoInfo } from '@/services/video';

type Props = {
    data: VideoInfo;
};
export default function VideoItem({ data }: Props) {
    return (
        <>
            <div className="ytb-video-thumb">
                <Image src={data?.cover} alt="care 1" className="w-full" width={100} height={100} />
            </div>
            <h4 className="ytb-video-title">{data?.title}</h4>
            <div className="ytb-video-info">
                <span>{data?.author?.nickname}</span>
                <span>{data?.view}</span>
            </div>
        </>
    );
}
