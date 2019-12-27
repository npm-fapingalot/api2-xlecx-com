import { getID } from './parser';

describe('#getID', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => '/7750-sidney-fast-times-rampr-high.html' })) } as Cheerio;
    expect(getID($)).toBe('7750-sidney-fast-times-rampr-high');
  });
});
