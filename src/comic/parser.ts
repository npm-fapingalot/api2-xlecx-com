import * as SELECTOR from './selectors';
import { getText, toInt, regexExtract, isEmpty, getRootText, isDefined, isUndefined } from '../parse.utils';
import { IComic } from '.';
import { IContent, ITagged, ITag, IStdTaging } from '../schema.base';
import { ID } from './schema';

// SELECTOR
export const PAGE_COUNT_REGEX = /(\d+)\s+pages/i;
export const getPageCount = ($: CheerioStatic): number | null =>
  toInt(regexExtract(getText($(SELECTOR.PAGE_COUNT)), PAGE_COUNT_REGEX));

const injectIntoPageURL = (url: string) => {
  const spl = url.split('/');
  return spl.slice(0, 6).join('/') + '/thumbs/' + spl.slice(6).join('/');
}

const injectPrefix = (url: string | null | undefined): string | null => {
  if (isEmpty(url)) { return null; }
  return 'https://xlecx.com' + url;
}

export const getPages = ($: CheerioStatic): IContent[] =>
  $(SELECTOR.THUMBNAIL_IMAGES)
    .map((i, el) => $(el).attr('href') || injectPrefix($(el).attr('data-src')))
    .get()
    .filter((val) => !isEmpty(val))
    .map((imgURL: string) => ({
      thumbnailURL: injectIntoPageURL(imgURL),
      conetntURL: [imgURL],
    }));

export const getTags = ($: CheerioStatic): ITagged => {
  const info: { [key: string]: ITag[] } = {};
  $(SELECTOR.TAGS_CONTAINER)
    .each((i, elRaw) => {
      const el = $(elRaw);

      const name = getRootText(el);
      if (isEmpty(name)) { return; }

      const values = el.find(SELECTOR.CONTAINER_TAG)
        .map((i2, tag) => ({
          name: getRootText($(tag)),
          href: $(tag).attr('href'),
        } as ITag)).get();

      info[name.toLocaleLowerCase().substring(0, name.length - 1)] = values;
    });

  return {
    parodies: info.parody || [],
    characters: info.character || [],
    tags: info.tags || [],
    artists: info.artist || [],
    groups: info.group || [],
    languages: info.language || [],
    categories: info.categorie || [],
  };
};

export default ($: CheerioStatic, id: ID): IComic => {
  const title = getText($(SELECTOR.TITLE));
  if (isEmpty(title)) { throw new Error('Title is empty'); }

  const pageCount = getPageCount($);
  if (!pageCount) { throw new Error('PageCount is empty'); }

  const pages = getPages($);
  if (pages.length !== pageCount) { throw new Error('Page count doesn\'t match pages ' + pages.length + '/' + pageCount); }

  return {
    id,

    title,

    tags: getTags($),
    content: pages,
  };
};
