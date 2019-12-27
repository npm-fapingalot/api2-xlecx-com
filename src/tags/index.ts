import NHentaiAPI from '..';
import parse from './parser';

export default class TagAPI {
  constructor(private api: NHentaiAPI) { }

  async tags() { return parse(await this.api.cheerio(`/tags/`)); }
}
