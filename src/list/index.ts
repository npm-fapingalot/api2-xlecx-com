import NHentaiAPI from '..';
import parse from './parser';

export default class ListAPI {
  constructor(private api: NHentaiAPI) { }

  async home(page = 0) { return parse(await this.api.cheerio(`/page/${page + 1}/`)); }
  async search(query: string, page = 0) {
    return parse(await this.api.cheerio(`/page/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `do=search&subaction=search&search_start=${page + 1}&full_search=0&result_from=${page * 15 + 1}&story=${query}`
    }));
  }

  private async _tags(name: string, query: string, page = 0) {
    return parse(await this.api.cheerio(`/${name}/${query}/page/${page + 1}/`));
  }
  tag(tag: string, page = 0) { return this._tags('tags', tag, page); }
  artist(artist: string, page = 0) { return this._tags('xfsearch/artist', artist, page); }
  parody(parody: string, page = 0) { return this._tags('xfsearch/parody', parody, page); }
  group(group: string, page = 0) { return this._tags('xfsearch/group', group, page); }
}

export * from './schema';
