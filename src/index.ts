import ComicAPI from './comic';
import fetch, { RequestInit } from 'node-fetch';
import cheerio from 'cheerio';
import ListAPI from './list';
import TagAPI from './tags';

export default class NHentaiAPI {
  public readonly comic = new ComicAPI(this);
  public readonly list = new ListAPI(this);
  public readonly tags = new TagAPI(this);


  constructor(public readonly baseURL = 'https://xlecx.com') {
    this.baseURL = baseURL.replace(/\/$/, '');
  }


  // Helper functions
  public async html(href: string, options?: RequestInit) {
    return await (await fetch(this.baseURL + href, options)).text();
  }
  public async cheerio(href: string, options?: RequestInit) {
    return cheerio.load(await this.html(href, options));
  }
}
