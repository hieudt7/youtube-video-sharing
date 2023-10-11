import { setupWorker, rest } from 'msw';
import { remove } from 'lodash';
import { VideoListData, userListData } from './data';
import { type videoActionInfo, VideoInfo } from '@/services/video';
import { type UserInfo } from '@/services/authentication';
export const worker = setupWorker(
    //mock api get all video
    rest.get('/api/get-all-video', (req, res, ctx) => {
        //init mock data or get data from local storage
        const storedVideoList = localStorage.getItem('videoList');
        const videoListResponse = storedVideoList ? JSON.parse(storedVideoList) : VideoListData;
        if (!storedVideoList) {
            localStorage.setItem('videoList', JSON.stringify(VideoListData));
        }
        return res(
            ctx.json({
                data: videoListResponse,
            })
        );
    }),
    //mock api like/dislike video
    rest.post<videoActionInfo>('/api/video-action', (req, res, ctx) => {
        //handle store data in local storage
        let storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
        const { id } = req.body;
        const user = JSON.parse(localStorage.getItem('userLogged')!);
        const data = {
            ...req.body,
            author: user.id,
        };
        let response: any;
        if (storedVideoAction?.length > 0) {
            response = remove(storedVideoAction, (item: any) => item.author === user.id).filter(
                (item: any) => item.id !== id
            );
            response = [...response, data];
            storedVideoAction = storedVideoAction.concat(response);
        } else {
            storedVideoAction = [data];
            response = [data];
        }
        localStorage.setItem('videoAction', JSON.stringify(storedVideoAction));
        return res(
            ctx.json({
                data: response,
            })
        );
    }),
    //mock api undo action like/dislike video
    rest.post<videoActionInfo>('/api/video-action-remove', (req, res, ctx) => {
        //handle store data in local storage
        let storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
        const { id } = req.body;
        if (storedVideoAction) {
            storedVideoAction = storedVideoAction.filter((item: any) => item.id !== id); //
        }
        localStorage.setItem('videoAction', JSON.stringify(storedVideoAction));
        return res(
            ctx.json({
                data: storedVideoAction,
            })
        );
    }),
    //mock api get list video like/dislike of each user
    rest.get('/api/get-video-action', (req, res, ctx) => {
        const storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
        const user = JSON.parse(localStorage.getItem('userLogged')!);
        if (!user) {
            return res(ctx.status(401), ctx.json({ success: false, message: 'not authorized' }));
        } else {
            const response = storedVideoAction.filter((item: any) => item.author === user.id);
            return res(
                ctx.json({
                    data: response,
                })
            );
        }
    }),
    //mock api login
    rest.post<UserInfo>('/api/login', (req, res, ctx) => {
        const storedUserList = JSON.parse(localStorage.getItem('userList')!);
        if (!storedUserList) {
            //init user list data into local storage
            localStorage.setItem('userList', JSON.stringify(userListData));
        }
        const { email, password } = req.body;
        const userLogged = JSON.parse(localStorage.getItem('userList')!).find((item: any) => item.email === email);
        if (userLogged && password === userLogged.password) {
            localStorage.setItem('userLogged', JSON.stringify(userLogged));
            return res(
                ctx.json({
                    data: userLogged,
                })
            );
        } else {
            return res(ctx.status(401), ctx.json({ success: false, message: 'Login failed' }));
        }
    }),
    //mock api register
    rest.post<UserInfo>('/api/register', (req, res, ctx) => {
        const storedUserList = JSON.parse(localStorage.getItem('userList')!);
        const { email, username, password } = req.body;
        const existingUser = JSON.parse(localStorage.getItem('userList')!).find((item: any) => item.email === email);
        if (existingUser) {
            return res(ctx.status(401), ctx.json({ success: false, message: 'User already exists.' }));
        } else {
            //mock user register
            const newUser = {
                id: storedUserList.length + 1,
                avatar: '',
                username: username,
                email: email,
                password: password,
            };
            storedUserList.push(newUser);
            localStorage.setItem('userList', JSON.stringify(storedUserList));
            localStorage.setItem('userLogged', JSON.stringify(newUser));
            return res(
                ctx.json({
                    data: newUser,
                })
            );
        }
    }),
    //mock api share video
    rest.post<VideoInfo>('/api/share-youtube-video', (req, res, ctx) => {
        const { title, url, cover } = req.body;
        const storedVideoList = JSON.parse(localStorage.getItem('videoList')!);
        const defaultThumb =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJNhL2iJjNAlS7mbgcQDddFu8VKaFIm-D8A&usqp=CAU';
        const videoResponse = {
            id: storedVideoList?.length + 1,
            createTime: new Date(),
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
        return res(
            ctx.json({
                data: videoResponse,
            })
        );
    })
);
