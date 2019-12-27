import * as SELECTOR from './selectors';
import { getRootText, getText, htmlTrim } from '../parse.utils';
import { ITag } from '../schema.base';


export default ($: CheerioStatic): ITag[] => {
  return $(SELECTOR.TAG).map((i, elRaw) => {
    const el = $(elRaw);

    return {
      name: getRootText(el),
      href: el.attr('href'),
    };
  }).get().filter(({ href }) => /\/tags\//i.test(href));
};

