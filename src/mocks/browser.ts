import { setupWorker, rest } from 'msw';
import { VideoListData } from './data';
export const worker = setupWorker(
    //mock api get all video
    rest.get('/api/get-all-video', (req, res, ctx) => {
        const storedVideoList = localStorage.getItem('videoList');
        const videoListResponse = storedVideoList ? JSON.parse(storedVideoList) : VideoListData;
        localStorage.setItem('videoList',JSON.stringify(VideoListData));
        return res(
            ctx.json({
                data: videoListResponse,
            })
          
        );
    }),
    rest.post('/api/video-action', (req, res, ctx) => {
        //save data to localstorage
        let storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
        if(storedVideoAction){
            storedVideoAction =  [...storedVideoAction, req.body]
        } else{
            storedVideoAction =  [req.body]
        }
        localStorage.setItem('videoAction',JSON.stringify(storedVideoAction));
        return res();
    }),
    rest.get('/api/get-video-action', (req, res, ctx) => {
        const storedVideoAction = JSON.parse(localStorage.getItem('videoAction')!);
        return res(
            ctx.json({
                data: storedVideoAction,
            })
          
        );
    }),
    
);

// worker.start()
