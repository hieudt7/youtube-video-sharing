import { DEFAULT_API_TIMEOUT } from '.';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_TIMEOUT = process.env.NEXT_PUBLIC_API_TIMEOUT
  ? Number(process.env.NEXT_PUBLIC_API_TIMEOUT)
  : DEFAULT_API_TIMEOUT;

