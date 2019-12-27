import * as SELECTOR from './selectors';
import { getText, regexExtract, isEmpty } from '../parse.utils';
import { IPrevComic } from '.';
import { HREF_REGEX } from '../comic';

// Parsers
export const getID = ($: Cheerio): string | null =>
  regexExtract($.find(SELECTOR.POST_LINK).attr('href'), HREF_REGEX);

// Main parsers
export default ($: CheerioStatic): IPrevComic[] => {
  return $(SELECTOR.POST).map((ignore, elRaw) => {
    const el = $(elRaw);

    const id = getID(el);
    if (isEmpty(id)) { throw new Error('Invalid id: ' + id); }

    const thumbnail = ((el: Cheerio) => el.attr('data-src') || el.attr('src'))(el.find(SELECTOR.POST_IMG));
    if (isEmpty(thumbnail)) { throw new Error('Thumbnail is empty'); }

    const title = getText(el.find(SELECTOR.POST_TITLE));
    if (isEmpty(title)) { throw new Error('Title is empty'); }

    return {
      id,
      thumbnail,
      title,
    } as IPrevComic;
  }).get();
};
