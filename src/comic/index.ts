import NHentaiAPI from '..';
import { regexExtract, isDefined } from '../parse.utils';
import parse from './parser';
import { ID } from './schema';

export const HREF_REGEX = /\/?(\d+(-\w+)+)\.html\/?/i

export default class ComicAPI {
  constructor(private api: NHentaiAPI) { }

  async id(id: ID) { return parse(await this.api.cheerio(`/${id}.html`), id); }

  hrefToID(href: string): ID | null {
    if (!href.startsWith('/') && !href.startsWith(this.api.baseURL + '/')) { return null; }
    return regexExtract(href, HREF_REGEX)
  }

  isValidHref(href: string): boolean {
    return isDefined(this.hrefToID(href));
  }
}

export * from './schema';
