import type { UserInfo } from './authentication';
import { VideoListData } from '@/mocks/data';
import { remove } from 'lodash';
export interface VideoInfo {
  id?: string;
  createTime?: string;
  title?: string;
  url: string;
  cover?: string;
  view?: number;
  duration?: string;
  likes?: number;
  dislikes?: number;
  author?: UserInfo | null;
  isTrending?: boolean;
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

type ShareYoutubeVideoParams = {
  payload?: VideoInfo;
};

export function getAllVideo() {
  return new Promise<VideoInfo[]>((resolve, _reject) => {
    const storedVideoList = localStorage.getItem('videoList');
    const videoListResponse = storedVideoList
      ? JSON.parse(storedVideoList)
      : VideoListData;
    if (!storedVideoList) {
      localStorage.setItem('videoList', JSON.stringify(VideoListData));
    }
    resolve(videoListResponse);
  });
}

export function videoAction(params: SearchEmailTemplatesParams) {
  const {
    payload = {
      id: '',
      action: '',
    },
  } = params;
  return new Promise<videoActionInfo[]>((resolve, _reject) => {
    let storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
    const { id } = payload;
    const user = JSON.parse(localStorage.getItem('userLogged')!);
    const data = {
      ...payload,
      author: user.id,
    };
    let response: any;
    if (storedVideoAction?.length > 0) {
      response = remove(
        storedVideoAction,
        (item: any) => item.author === user.id,
      ).filter((item: any) => item.id !== id);
      response = [...response, data];
      storedVideoAction = storedVideoAction.concat(response);
    } else {
      storedVideoAction = [data];
      response = [data];
    }
    localStorage.setItem('videoAction', JSON.stringify(storedVideoAction));

    resolve(response);
  });
}

export function removeVideoAction(params: SearchEmailTemplatesParams) {
  const {
    payload = {
      id: '',
      action: '',
    },
  } = params;

  return new Promise<videoActionInfo[]>((resolve, _reject) => {
    let storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
    const { id } = payload;
    if (storedVideoAction) {
      storedVideoAction = storedVideoAction.filter(
        (item: any) => item.id !== id,
      ); //
    }
    localStorage.setItem('videoAction', JSON.stringify(storedVideoAction));
    resolve(storedVideoAction);
  });
}

export function getVideoAction() {
  return new Promise<videoActionInfo[]>((resolve, _reject) => {
    const storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
    const user = JSON.parse(localStorage.getItem('userLogged')!);
    if (user) {
      const response = storedVideoAction.filter(
        (item: any) => item.author === user.id,
      );
      resolve(response);
    }
  });
}

export function shareYoutubeVideo(params: ShareYoutubeVideoParams) {
  const {
    //fake video info
    payload = {
      title: '',
      url: '',
      cover: '',
      author: null,
    },
  } = params;
  return new Promise<VideoInfo>((resolve, _reject) => {
    const { title, url, cover } = payload;
    const storedVideoList = JSON.parse(localStorage.getItem('videoList')!);
    const defaultThumb =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJNhL2iJjNAlS7mbgcQDddFu8VKaFIm-D8A&usqp=CAU';
    const videoResponse = {
      id: storedVideoList?.length + 1,
      createTime: new Date().toDateString(),
      title: title,
      cover: cover || defaultThumb,
      url: url,
      view: Math.floor(Math.random() * 500) + 100,
      duration: '0:42',
      likes: Math.floor(Math.random() * 500) + 100,
      dislikes: Math.floor(Math.random() * 500) + 100,
      author: JSON.parse(localStorage.getItem('userLogged')!),
      isTrending: false,
    };
    storedVideoList.push(videoResponse);
    localStorage.setItem('videoList', JSON.stringify(storedVideoList));

    resolve(videoResponse);
  });
}
