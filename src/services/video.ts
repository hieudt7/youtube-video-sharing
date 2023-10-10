import client from '@/utils/httpClient';
import { handleAxiosResponse, handleAxiosError } from './common';
import type { ApiResponse } from './common';
import type { UserInfo } from './authentication';
export interface VideoInfo {
    id: string;
    createTime: string;
    title: string;
    cover: string;
    view: number;
    duration: string;
    likes: number;
    dislikes: number;
    author: UserInfo;
    isTrending: boolean;
}

export type videoActionEnum = 'LIKE' | 'DISLIKE';

type SearchEmailTemplatesParams = {
  payload?: videoActionInfo;
};

export type videoActionInfo = {
  id?: string;
  action?: videoActionEnum;
};
export interface VideoInfoResponse {
    data: VideoInfo[];
}

export function getAllVideo() {
    return new Promise<VideoInfo[]>((resolve, reject) => {
        client
            .get<ApiResponse<VideoInfo[]>>(`/api/get-all-video`)
            .then(handleAxiosResponse(resolve))
            .catch(handleAxiosError(reject));
    });
}

export function videoAction(params: SearchEmailTemplatesParams) {
    const {
        payload = {
            id: '',
            action: '',
        },
    } = params;

    return new Promise<videoActionInfo[]>((resolve, reject) => {
        client.post(`/api/video-action`, payload).then(handleAxiosResponse(resolve)).catch(handleAxiosError(reject));
    });
}

export function removeVideoAction(params: SearchEmailTemplatesParams) {
    const {
        payload = {
            id: '',
            action: '',
        },
    } = params;

    return new Promise<videoActionInfo[]>((resolve, reject) => {
        client
            .post(`/api/video-action-remove`, payload)
            .then(handleAxiosResponse(resolve))
            .catch(handleAxiosError(reject));
    });
}

export function getVideoAction() {
    return new Promise<videoActionInfo[]>((resolve, reject) => {
        client
            .get<ApiResponse<videoActionInfo[]>>(`/api/get-video-action`)
            .then(handleAxiosResponse(resolve))
            .catch(handleAxiosError(reject));
    });
}
