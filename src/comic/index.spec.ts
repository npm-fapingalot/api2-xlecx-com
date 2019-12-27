import NHentaiAPI from '..';

const api = (new NHentaiAPI()).comic;

describe('#hrefToID', () => {
  test('Working', async () => {
    expect(api.hrefToID('https://xlecx.org/7750-sidney-fast-times-rampr-high.html')).toBe(null);

    expect(api.hrefToID('https://xlecx.com/7750-sidney-fast-times-rampr-high.html')).toBe('7750-sidney-fast-times-rampr-high');
    expect(api.hrefToID('/7750-sidney-fast-times-rampr-high.html')).toBe('7750-sidney-fast-times-rampr-high');
  }, 20000000);
});

describe('#isValidHref', () => {
  test('Working', async () => {
    expect(api.isValidHref('https://xlecx.org/7750-sidney-fast-times-rampr-high.html')).toBe(false);

    expect(api.isValidHref('https://xlecx.com/7750-sidney-fast-times-rampr-high.html')).toBe(true);
    expect(api.isValidHref('/7750-sidney-fast-times-rampr-high.html')).toBe(true);
  }, 20000000);
});
