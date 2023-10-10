'use client';
import React, { useState, useContext, useMemo, createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { type videoActionInfo } from '@/services/video';

type Props = {
    children?: React.ReactNode;
};

interface CommonDataContextType {
    isLoading: boolean;
    setIsLoading:(isLoading: boolean) => void;

    videoActionList: videoActionInfo[];
    setVideoActionList: Dispatch<SetStateAction<videoActionInfo[]>>;
    

    isReloadVideoList: boolean | null;
    setIsReloadVideoList: (isReload: boolean) => void;

}

const CommonDataContext = createContext<CommonDataContextType>({
    isLoading: false,
    setIsLoading: () => {},
    videoActionList: [],
    setVideoActionList: () => {},
    isReloadVideoList: null,
    setIsReloadVideoList: () => {},
});

export function CommonDataContextProvider({ children }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isReloadVideoList, setIsReloadVideoList] = useState<boolean | null>(null);
    const [videoActionList, setVideoActionList] = useState<videoActionInfo[]>([]);

    const providerValue = useMemo(
        () => ({
            isLoading,
            setIsLoading,
            videoActionList,
            setVideoActionList,
            isReloadVideoList,
            setIsReloadVideoList
        }),
        [isLoading, videoActionList,isReloadVideoList]
    );
    return <CommonDataContext.Provider value={providerValue}>{children}</CommonDataContext.Provider>;
}

export const useCommonDataContext = () => useContext(CommonDataContext);
