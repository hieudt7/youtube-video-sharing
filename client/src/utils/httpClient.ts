import axios from 'axios';
import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { BASE_URL, API_KEY, API_TIMEOUT } from './constants/envVars';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${API_KEY}`,
};

type InstanceOptions = {
  baseURL?: string;
  headers?: {
    readonly [key: string]: string;
  };
  timeout?: number;
};

const createClient = (options: InstanceOptions = {}) =>
  axios.create({
    baseURL: options?.baseURL || BASE_URL,
    headers: { ...defaultHeaders, ...options?.headers },
    timeout: options?.timeout || API_TIMEOUT,
  });

const defaultClient = createClient();

defaultClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    decamelizeQueryParamsAndRequestBody(config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Axios middleware to convert all api responses to camelCase
defaultClient.interceptors.response.use(
  (response: AxiosResponse) => {
    camelizeResponseBody(response);

    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// turn camelCase to snake-case for request query params and request body
const decamelizeQueryParamsAndRequestBody = (
  config: InternalAxiosRequestConfig,
) => {
  if (config.params) {
    config.params = decamelizeKeys(config.params);
  }

  if (
    config.data &&
    config?.headers?.['Content-Type'] === defaultHeaders['Content-Type']
  ) {
    config.data = decamelizeKeys(config.data);
  }
};

// turn snake-case to camelCase for response body
const camelizeResponseBody = (response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === defaultHeaders['Content-Type']
  ) {
    response.data = camelizeKeys(response.data);
  }
};

export default defaultClient;
