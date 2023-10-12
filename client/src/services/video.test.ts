import { setupServer } from 'msw/node';
import {
  mockApiGetAllVideo,
  mockApiGetVideoAction,
  mockApiPostVideoAction,
  mockApiPostRemoveVideoAction,
  mockApiShareYoutubeVideo,
} from '@/mocks/apiMock';
import {
  getAllVideo,
  videoAction,
  removeVideoAction,
  getVideoAction,
  shareYoutubeVideo,
  VideoInfo,
  videoActionInfo,
} from './video';

describe('Services >> get all videos', () => {
  const server = setupServer(...mockApiGetAllVideo);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should call API success', async () => {
    const expectedVideos = [
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
    ];

    const videos = await getAllVideo();
    expect(videos).toEqual(expectedVideos);
  });
});

describe('Services >> get video action', () => {
  const server = setupServer(...mockApiGetVideoAction);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should call API success', async () => {
    const expectedResponse = [
      {
        id: '1',
        action: 'LIKE',
        author: '1',
      },
    ];

    const videos = await getVideoAction();
    expect(videos).toEqual(expectedResponse);
  });
});

describe('Services >> post video action', () => {
  const server = setupServer(...mockApiPostVideoAction);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should send a video action payload', async () => {
    const payload: videoActionInfo = {
      id: '1',
      action: 'LIKE',
    };

    const expectedResponse = [
      {
        id: '1',
        action: 'LIKE',
        author: '1',
      },
    ];

    const response = await videoAction({ payload });
    expect(response).toEqual(expectedResponse);
  });
});

describe('Services >> post remove action', () => {
  const server = setupServer(...mockApiPostRemoveVideoAction);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should send a remove video action payload', async () => {
    const payload: videoActionInfo = {
      id: '2',
      action: 'LIKE',
    };

    const expectedResponse = [
      {
        id: '1',
        action: 'LIKE',
        author: '1',
      },
    ];

    const response = await removeVideoAction({ payload });
    expect(response).toEqual(expectedResponse);
  });
});

describe('Services >> post share video', () => {
  const server = setupServer(...mockApiShareYoutubeVideo);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should send a video action payload', async () => {
    const payload: VideoInfo = {
      title: 'title test',
      url: ' url test',
      cover: 'cover test',
    };

    const expectedResponse = {
      id: '1',
      createTime: '2022-01-01',
      title: payload.title,
      cover: payload.cover,
      url: payload.url,
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

    const response = await shareYoutubeVideo({ payload });
    expect(response).toEqual(expectedResponse);
  });
});
