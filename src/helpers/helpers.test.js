import { verifyLoadablePage } from './index';

describe('verifyLoadableLink', () => {
  it('should return false when pass actualPage and newPage with the same pathname', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'example.com',
    };

    const newPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'example.com',
      target: '',
      hasAttribute: () => false,
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return false when pass actualPage and newPage with different protocols', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8081',
      hostname: 'example.com',
    };

    const newPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'example.com',
      target: '',
      hasAttribute: () => false,
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return false when pass actualPage and newPage with different hostname (different websites)', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'test.com',
    };

    const newPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'example.com',
      target: '',
      hasAttribute: () => false,
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return false when pass newPage with target attribute on the element', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'test.com',
    };

    const newPage = {
      pathname: '/about',
      protocol: '8080',
      hostname: 'test.com',
      target: '_blank',
      hasAttribute: () => false,
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return false when pass newPage with download attribute on the element', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'test.com',
    };

    const newPage = {
      pathname: '/about',
      protocol: '8080',
      hostname: 'test.com',
      target: '',
      hasAttribute: (attr) => attr === 'download',
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return false when pass newPage with data-no-rocketpage (blocked flag) attribute on the element', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'test.com',
    };

    const newPage = {
      pathname: '/about',
      protocol: '8080',
      hostname: 'test.com',
      target: '',
      hasAttribute: (attr) => attr === 'data-no-rocketpage',
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(false);
  });

  it('should return true when the newPage is a different internal link loadable', () => {
    const actualPage = {
      pathname: '/',
      protocol: '8080',
      hostname: 'test.com',
    };

    const newPage = {
      pathname: '/about',
      protocol: '8080',
      hostname: 'test.com',
      target: '',
      hasAttribute: () => false,
    };

    expect(verifyLoadablePage(newPage, actualPage)).toBe(true);
  });
});
