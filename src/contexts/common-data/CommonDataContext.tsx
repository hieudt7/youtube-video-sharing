'use client';
import React, { useState, useContext, useMemo, createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { type videoActionInfo } from '@/services/video';

type Props = {
    children?: React.ReactNode;
};

interface CommonDataContextType {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;

    videoActionList: videoActionInfo[];
    setVideoActionList: Dispatch<SetStateAction<videoActionInfo[]>>;

}

const CommonDataContext = createContext<CommonDataContextType>({
    isLoading: false,
    setIsLoading: () => {},
    videoActionList: [],
    setVideoActionList: () => {},
});

export function CommonDataContextProvider({ children }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [videoActionList, setVideoActionList] = useState<videoActionInfo[]>([]);

    const providerValue = useMemo(
        () => ({
            isLoading,
            setIsLoading,
            videoActionList,
            setVideoActionList,
        }),
        [isLoading, videoActionList]
    );
    return <CommonDataContext.Provider value={providerValue}>{children}</CommonDataContext.Provider>;
}

export const useCommonDataContext = () => useContext(CommonDataContext);
