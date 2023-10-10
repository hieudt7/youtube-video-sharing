'use client';
import React from 'react';
import { useEffect, useState } from 'react';

import VideoItem from '../video-list-item';
import { getAllVideo,getVideoAction, type VideoInfo } from '@/services/video';

import { useCommonDataContext } from '@/contexts';

export default function VideoList() {
    const [videoList, setVideoList] = useState<VideoInfo[]>([]);
    const { setVideoActionList,isReloadVideoList } = useCommonDataContext();
    useEffect(() => {
        initGetAllVideo();
        initGetVideoAction();
    }, [isReloadVideoList]);

    const initGetAllVideo = async () =>{
        try {
            const videoInfoResponse = await getAllVideo();
            if (videoInfoResponse) {
                setVideoList(videoInfoResponse);
            }
        } catch (error) {
            console.error('Failed to fetch video info', error);
        } finally {
        }
    }
    const initGetVideoAction = async () =>{
        try {
            const videoActionResponse = await getVideoAction();
            if(videoActionResponse){
                setVideoActionList(videoActionResponse);
            }
        } catch (error) {
            console.error('Failed to fetch video info', error);
        } finally {
        }
    }

    return (
        <>
            <ul className={''}>
                {videoList?.map((item) => (
                    <li key={item.id}>
                        <VideoItem data={item} /> 
                    </li>
                ))}
            </ul>
        </>
    );
}
