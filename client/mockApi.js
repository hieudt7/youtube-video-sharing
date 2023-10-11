const connectApiMocker = require('connect-api-mocker');

const mockApiMiddleware = connectApiMocker('/api', 'mocks');

module.exports = mockApiMiddleware;