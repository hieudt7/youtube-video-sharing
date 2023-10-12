'use client';

import React, { useState, useContext, useMemo, createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { type videoActionInfo, VideoInfo } from '@/services/video';

type Props = {
  children?: React.ReactNode;
};

interface CommonDataContextType {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  videoList: VideoInfo[];
  setVideoList: Dispatch<SetStateAction<VideoInfo[]>>;

  videoActionList: videoActionInfo[];
  setVideoActionList: Dispatch<SetStateAction<videoActionInfo[]>>;

  isReloadVideoList: boolean | null;
  setIsReloadVideoList: (isReload: boolean) => void;

  videoNotification: VideoInfo[];
  setVideoNotification: Dispatch<SetStateAction<VideoInfo[]>>;
}

const CommonDataContext = createContext<CommonDataContextType>({
  isLoading: false,
  setIsLoading: () => {},
  videoList: [],
  setVideoList: () => {},
  videoActionList: [],
  setVideoActionList: () => {},
  isReloadVideoList: null,
  setIsReloadVideoList: () => {},
  videoNotification: [],
  setVideoNotification: () => {},
});

export function CommonDataContextProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isReloadVideoList, setIsReloadVideoList] = useState<boolean | null>(
    null,
  );
  const [videoList, setVideoList] = useState<VideoInfo[]>([]);
  const [videoActionList, setVideoActionList] = useState<videoActionInfo[]>([]);
  const [videoNotification, setVideoNotification] = useState<VideoInfo[]>([]);

  const providerValue = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      videoList,
      setVideoList,
      videoActionList,
      setVideoActionList,
      isReloadVideoList,
      setIsReloadVideoList,
      videoNotification,
      setVideoNotification,
    }),
    [
      isLoading,
      videoList,
      videoNotification,
      videoActionList,
      isReloadVideoList,
    ],
  );
  return (
    <CommonDataContext.Provider value={providerValue}>
      {children}
    </CommonDataContext.Provider>
  );
}

export const useCommonDataContext = () => useContext(CommonDataContext);
