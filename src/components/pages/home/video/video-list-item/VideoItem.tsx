'use client';
import React from 'react';
import Image from 'next/image';

import type { VideoInfo } from '@/services/video';
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
};
export default function VideoItem({ data }: Props) {
    return (
        <Box role="presentation" sx={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius:'8px',
            marginBottom:'24px',
          }}>
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
                        <Button>
                            <ThumbUpAltIcon />
                            {data?.likes}
                        </Button>
                        <Button>
                            {' '}
                            <ThumbDownAltIcon />
                            {data?.dislikes}
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </Box>
    );
}
