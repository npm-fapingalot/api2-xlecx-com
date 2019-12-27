import NHentaiAPI from '..';

const api = (new NHentaiAPI()).tags;

describe('#tags', () => {
  test('Compatibility', async () => {
    const comic = await api.tags();

    expect(comic).toBeDefined();
    expect(comic.length).toBeGreaterThan(432);
  }, 2000000);
});
