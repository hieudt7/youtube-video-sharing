import { setupWorker, rest } from 'msw';
import { VideoListData, userListData } from './data';
import { type videoActionInfo } from '@/services/video';
import { type UserInfo } from '@/services/authentication';
export const worker = setupWorker(
    //mock api get all video
    rest.get('/api/get-all-video', (req, res, ctx) => {
        //init mock data or get data from local storage
        const storedVideoList = localStorage.getItem('videoList');
        const videoListResponse = storedVideoList ? JSON.parse(storedVideoList) : VideoListData;
        localStorage.setItem('videoList', JSON.stringify(VideoListData));
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
        if (storedVideoAction) {
            storedVideoAction = storedVideoAction.filter((item: any) => item.id !== id);
            storedVideoAction = [...storedVideoAction, req.body];
        } else {
            storedVideoAction = [req.body];
        }
        localStorage.setItem('videoAction', JSON.stringify(storedVideoAction));
        return res(
            ctx.json({
                data: storedVideoAction,
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
        return res(
            ctx.json({
                data: storedVideoAction,
            })
        );
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
                password: password
            };
            storedUserList.push(newUser)
            localStorage.setItem('userList', JSON.stringify(storedUserList));
            localStorage.setItem('userLogged', JSON.stringify(newUser));
            return res(
                ctx.json({
                    data: newUser,
                })
            );
        }
    })
);

// worker.start()
