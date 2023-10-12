import { handleAxiosResponse, handleAxiosError } from './common';

describe('handleAxiosResponse', () => {
  it('should resolve with response data when data is defined', () => {
    const response = {
      data: {
        data: 'test data',
      },
    };
    const resolveMock = jest.fn();

    handleAxiosResponse(resolveMock)(response as any);

    expect(resolveMock).toHaveBeenCalledWith('test data');
  });

  it('should resolve without data when response data is undefined', () => {
    const response = {
      data: undefined,
    };
    const resolveMock = jest.fn();

    handleAxiosResponse(resolveMock)(response as any);

    expect(resolveMock).toHaveBeenCalledWith();
  });
});

describe('handleAxiosError', () => {
  it('should log error message and reject with server response data if available', () => {
    const error = {
      config: {
        method: 'GET',
        url: '/api/some-endpoint',
      },
      message: 'Request failed',
      response: {
        data: 'Server error',
      },
    };
    const rejectMock = jest.fn();

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    handleAxiosError(rejectMock)(error as any);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'GET request to /api/some-endpoint failed, Request failed',
    );
    expect(rejectMock).toHaveBeenCalledWith('Server error');

    consoleErrorSpy.mockRestore();
  });

  it('should log error message and reject with error message if server response data is not available', () => {
    const error = {
      config: {
        method: 'POST',
        url: '/api/another-endpoint',
      },
      message: 'Network error',
      response: undefined,
    };
    const rejectMock = jest.fn();

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    handleAxiosError(rejectMock)(error as any);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'POST request to /api/another-endpoint failed, Network error',
    );
    expect(rejectMock).toHaveBeenCalledWith('Network error');

    consoleErrorSpy.mockRestore();
  });
});
