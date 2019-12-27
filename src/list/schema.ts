import { ID } from '../comic';

/**
 * The object used to describe comic list elements. Ie the home screen, ...
 */
export interface IPrevComic {
  /**
   * The id of the comic
   */
  id: ID;

  /**
   * The thumbnail image
   */
  thumbnail: string;

  /**
   * The title of the comic
   */
  title: string;
}
