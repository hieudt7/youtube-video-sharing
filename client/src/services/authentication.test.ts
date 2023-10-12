import { login, register, UserInfo } from './authentication';
import { mockApiLogin, mockApiRegister } from '@/mocks/apiMock';
import { setupServer } from 'msw/node';

describe('Services >> api login', () => {
  const server = setupServer(...mockApiLogin);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should login success', async () => {
    const payload: UserInfo = {
      email: 'test meail',
      password: 'password',
    };

    const expectedResponse = {
      id: '1',
      avatar: 'avatar',
      username: 'hieudt',
      email: payload.email,
      password: payload.password,
    };

    const response = await login({ payload });
    expect(response).toEqual(expectedResponse);
  });
});

describe('Services >> api register', () => {
  const server = setupServer(...mockApiRegister);
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should register success', async () => {
    const payload = {
      email: 'email@domain.com',
      password: 'password',
      username: 'username',
    };

    const expectedResponse = {
      id: '1',
      avatar: 'avatar',
      username: payload.username,
      email: payload.email,
      password: payload.password,
    };

    const response = await register({ payload });
    expect(response).toEqual(expectedResponse);
  });
});
