'use client';
import React from 'react';
import Image from 'next/image';

import { videoAction, type VideoInfo, videoActionEnum, videoActionInfo } from '@/services/video';
import { DISPLAY_DATE_FORMAT } from '@/constants/time';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import dayjs from 'dayjs';

type Props = {
    data: VideoInfo;
    videoActionList: videoActionInfo[];
};
export default function VideoItem({ data, videoActionList }: Props) {
    console.log(videoActionList);
    const handleVideoAction = async (id: string, action: videoActionEnum) => {
        const videoInfoResponse = await videoAction({
            payload: {
                id: id,
                action: action,
            },
        });
        //TODO pass userId
        console.log(videoInfoResponse);
    };
    const handleRemoveVideoACtion = async (id: string, action: videoActionEnum) => {
        alert('remove Like');
    };
    return (
        <Box
            role="presentation"
            sx={{
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: '8px',
                marginBottom: '24px',
            }}
        >
            <div className="flex flex-row p-4">
                <div className="avatar">
                    <Avatar alt={data?.author.nickname} src={data?.author.avatar} />
                </div>
                <div>
                    <div className="title">{data?.title}</div>
                    <div className="title">
                        <span>{data?.author.nickname}</span>
                        {' - '}
                        <span>{dayjs(data?.createTime).format(DISPLAY_DATE_FORMAT)}</span>
                    </div>
                </div>
            </div>
            <div className="ytb-video-thumb pt-3">
                <Image src={data?.cover} alt="care 1" className="w-full" width={100} height={100} />
            </div>
            <div className="ytb-video-info p-4">
                <div className="mb-4"> {data?.view} views</div>
                <div>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        {videoActionList?.find((e) => e.id === data.id)?.action === 'LIKE' ? (
                            <Button onClick={() => handleRemoveVideoACtion(data.id, 'LIKE')}>
                                <ThumbUpAltIcon />
                                {data?.likes}
                            </Button>
                        ) : (
                            <Button sx={{ color: '#333' }}  onClick={() => handleVideoAction(data.id, 'LIKE')}>
                                <ThumbUpAltIcon/>
                                {data?.likes}
                            </Button>
                        )}
                        {videoActionList?.find((e) => e.id === data.id)?.action === 'DISLIKE' ? (
                            <Button onClick={() => handleRemoveVideoACtion(data.id, 'DISLIKE')}>
                                <ThumbDownAltIcon />
                                {data?.likes}
                            </Button>
                        ) : (
                            <Button sx={{ color: '#333' }} onClick={() => handleVideoAction(data.id, 'DISLIKE')}>
                                <ThumbDownAltIcon />
                                {data?.likes}
                            </Button>
                        )}
                    </ButtonGroup>
                </div>
            </div>
        </Box>
    );
}
