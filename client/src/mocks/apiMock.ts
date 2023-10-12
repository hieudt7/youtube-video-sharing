// mocks.js
import { rest } from 'msw';
import { type videoActionInfo, VideoInfo } from '@/services/video';
import { type UserInfo } from '@/services/authentication';

export const mockApiGetAllVideo = [
  rest.get('/api/get-all-video', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: '1',
            createTime: '2022-01-01',
            title: 'Test Video',
            url: 'https://example.com/video',
            cover: 'https://example.com/cover.jpg',
            view: 100,
            duration: '02:30',
            likes: 10,
            dislikes: 2,
            author: null,
            isTrending: true,
          },
        ],
      })
    );
  }),
];

export const mockApiGetVideoAction = [
    rest.get('/api/get-video-action', (req, res, ctx) => {
        return res(
          ctx.json({
            data: [
              {
                id: '1',
                action: 'LIKE',
                author: '1',
              },
            ],
          })
        );
      })
];

export const mockApiPostVideoAction = [
    rest.post<videoActionInfo>('/api/video-action', (req, res, ctx) => {
        const { id, action } = req.body;
        const response = [{
            id:id,
            action:action,
            author: '1',
        }];
        return res(
            ctx.json({
                data: response,
            })
        );
      })
];

export const mockApiPostRemoveVideoAction = [
    rest.post<videoActionInfo>('/api/video-action-remove', (req, res, ctx) => {
        const response = [{
            id:'1',
            action:'LIKE',
            author: '1',
        }];
        return res(
            ctx.json({
                data: response,
            })
        );
      })
];

export const mockApiShareYoutubeVideo = [
    rest.post<VideoInfo>('/api/share-youtube-video', (req, res, ctx) => {
        const { title, url, cover } = req.body;
        const response = {
            id: '1',
            createTime: '2022-01-01',
            title: title,
            cover: cover,
            url: url,
            view: 100,
            duration: '0:42',
            likes: 200,
            dislikes: 300,
            author: {
                id: '1',
                avatar: 'avatar',
                username: 'username',
            },
            isTrending: false,
        };
        return res(
            ctx.json({
                data: response,
            })
        );
      })
];

export const mockApiLogin = [
  rest.post<UserInfo>('/api/login', (req, res, ctx) => {
    const { email, password } = req.body;
      const response = {
        id: '1',
        avatar: 'avatar',
        username: 'hieudt',
        email: email,
        password: password,
      };
      return res(
          ctx.json({
              data: response,
          })
      );
    })
];

export const mockApiRegister = [
  rest.post<UserInfo>('/api/register', (req, res, ctx) => {
    const { email, password,username } = req.body;
      const response = {
        id: '1',
        avatar: 'avatar',
        username: username,
        email: email,
        password: password,
      };
      return res(
          ctx.json({
              data: response,
          })
      );
    })
];
