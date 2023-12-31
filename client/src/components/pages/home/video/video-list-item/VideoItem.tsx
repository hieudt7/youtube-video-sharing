'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import {
  videoAction,
  removeVideoAction,
  type VideoInfo,
  videoActionEnum,
} from '@/services/video';
import { DISPLAY_DATE_FORMAT } from '@/utils/constants/time';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

import { toast } from 'react-toastify';

import { useCommonDataContext, useAuthContext } from '@/contexts';

import dayjs from 'dayjs';

type Props = {
  data: VideoInfo;
};
export default function VideoItem({ data }: Props) {
  const { videoActionList, setVideoActionList } = useCommonDataContext();
  const { isAuthenticated } = useAuthContext();
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);

  const handleVideoAction = async (id: string, action: videoActionEnum) => {
    if (!isAuthenticated) {
      toast.error('Please login to continue.');
      return;
    }
    const videoInfoResponse = await videoAction({
      payload: {
        id,
        action,
      },
    });
    if (videoInfoResponse) {
      setVideoActionList(videoInfoResponse);
    }
  };

  const handleRemoveVideoACtion = async (
    id: string,
    action: videoActionEnum,
  ) => {
    const videoInfoResponse = await removeVideoAction({
      payload: {
        id,
        action,
      },
    });
    if (videoInfoResponse) {
      setVideoActionList(videoInfoResponse);
    }
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
      data-testid="video-item-box"
    >
      <div className="flex flex-row p-4 gap-3 items-center">
        <div className="avatar">
          <Avatar alt={data?.author?.username} src={data?.author?.avatar} />
        </div>
        <div>
          <div className="title">{data?.title}</div>
          <div className="title">
            <span>{data?.author?.username}</span>
            {' - '}
            <span>{dayjs(data?.createTime).format(DISPLAY_DATE_FORMAT)}</span>
          </div>
        </div>
      </div>
      <div className="ytb-video-thumb pt-3 relative">
        {isPlayVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${data?.url}?autoplay=1&mute=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            height={350}
          />
        ) : (
          <>
            <IconButton
              onClick={() => setIsPlayVideo(true)}
              className="play-video-button"
              data-testid="play-video-button"
            >
              <PlayCircleIcon
                fontSize={'large'}
                sx={{ color: '#fff', fontSize: '80px' }}
              />
            </IconButton>
            <Image
              src={data?.cover ?? ''}
              alt="care 1"
              className="w-full"
              width={100}
              height={100}
            />
          </>
        )}
      </div>
      <div className="ytb-video-info p-4">
        <div className="mb-4"> {data?.view} views</div>
        <div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {videoActionList?.find((e) => e.id === data.id)?.action ===
            'LIKE' ? (
              <Button
                onClick={() => handleRemoveVideoACtion(data.id!, 'LIKE')}
                data-testid="video-like-button"
              >
                <ThumbUpAltIcon />
                {data?.likes}
              </Button>
            ) : (
              <Button
                sx={{ color: '#5e6771' }}
                onClick={() => handleVideoAction(data.id!, 'LIKE')}
                data-testid="video-like-button"
              >
                <ThumbUpAltIcon />
                {data?.likes}
              </Button>
            )}
            {videoActionList?.find((e) => e.id === data.id)?.action ===
            'DISLIKE' ? (
              <Button
                onClick={() => handleRemoveVideoACtion(data.id!, 'DISLIKE')}
                data-testid="video-dislike-button"
              >
                <ThumbDownAltIcon />
                {data?.likes}
              </Button>
            ) : (
              <Button
                sx={{ color: '#5e6771' }}
                onClick={() => handleVideoAction(data.id!, 'DISLIKE')}
                data-testid="video-dislike-button"
              >
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
