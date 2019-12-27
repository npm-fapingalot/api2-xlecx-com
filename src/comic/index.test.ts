import NHentaiAPI from '..';

const api = (new NHentaiAPI()).comic;

describe('#id', () => {
  test('Compatibility', async () => {
    const comic = await api.id('7750-sidney-fast-times-rampr-high');

    expect(comic).toBeDefined();
    expect(comic).toHaveProperty('id', '7750-sidney-fast-times-rampr-high');
    expect(comic).toHaveProperty('title', 'Sidney: Fast Times R&R High');
    expect(comic.content).toHaveLength(25);
  }, 20000000);
});
