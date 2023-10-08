import { setupWorker, rest } from 'msw';
import { VideoListData } from './data';
import { type videoActionInfo } from '@/services/video';
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
    //mock api undo like/dislike video
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
    })
);

// worker.start()
