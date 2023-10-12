// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom/extend-expect';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head({ children }) {
      return <>{children}</>;
    }
);

jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);


import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
