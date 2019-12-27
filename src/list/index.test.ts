import NHentaiAPI from '..';

const api = (new NHentaiAPI()).list;

describe('#home', () => {
  test('Compatibility', async () => {
    const comic = await api.home();

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});

describe('#search', () => {
  test('Compatibility', async () => {
    const comic = await api.search('ben 10');

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});

describe('#artist', () => {
  test('Compatibility', async () => {
    const comic = await api.artist('jay naylor');

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});

describe('#group', () => {
  test('Compatibility', async () => {
    const comic = await api.group('locofuria');

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});

describe('#parody', () => {
  test('Compatibility', async () => {
    const comic = await api.parody('ben 10');

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});

describe('#tag', () => {
  test('Compatibility', async () => {
    const comic = await api.tag('anal');

    expect(comic).toBeDefined();
    expect(comic).toHaveLength(15);
  }, 2000000);
});
