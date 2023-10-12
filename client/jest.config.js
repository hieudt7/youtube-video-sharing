const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    'react-dnd': 'react-dnd-cjs',
    'react-dnd-html5-backend': 'react-dnd-html5-backend-cjs',
    'dnd-core': 'dnd-core-cjs',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
  reporters: ['default', 'jest-sonar'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ['src/utils/httpClient.ts', 'src/mocks.ts'],
};

module.exports = createJestConfig(customJestConfig);
