import { isUndefined } from 'lodash';

import type { AxiosError, AxiosResponse } from 'axios';

export interface BaseParams {
    abortSignal?: AbortSignal;
}

export interface ApiResponse<T> {
    data: T;
}

export const handleAxiosResponse =
    (resolve: (data?: any) => void) =>
    (response?: AxiosResponse<ApiResponse<any> | void>): void => {
        if (isUndefined(response?.data)) {
            resolve();
        } else {
            const responseWithData = response?.data;
            if (!isUndefined(responseWithData)) {
                resolve((responseWithData as ApiResponse<any>).data);
            }
        }
    };

export const handleAxiosError = (reject: (reason?: any) => void) => (error: AxiosError) => {
    console.error(`${error.config?.method} request to ${error.config?.url} failed, ${error.message}`);

    if (error.response?.data) {
        reject(error.response.data);
    }

    reject(error.message);
};
