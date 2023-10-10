import client from '@/utils/httpClient';
import { handleAxiosResponse, handleAxiosError } from './common';

export interface UserInfo {
    id: string;
    avatar: string;
    username: string;
    email: string;
    password: string;
}
export interface UserLoginParams {
    payload: { email: string; password: string };
}
export interface UserRegisterParams {
    payload: { email: string; password: string; username: string };
}

export type videoActionInfo = {
    id?: string;
    action?: videoActionEnum;
};
export type videoActionEnum = 'LIKE' | 'DISLIKE';

export function login(params: UserLoginParams) {
    const {
        payload = {
            email: '',
            password: '',
        },
    } = params;

    return new Promise<UserInfo>((resolve, reject) => {
        client.post(`/api/login`, payload).then(handleAxiosResponse(resolve)).catch(handleAxiosError(reject));
    });
}
export function register(params: UserRegisterParams) {
    const {
        payload = {
            email: '',
            password: '',
            username: '',
        },
    } = params;

    return new Promise<UserInfo>((resolve, reject) => {
        client.post(`/api/register`, payload).then(handleAxiosResponse(resolve)).catch(handleAxiosError(reject));
    });
}
