import { IData, ITitled } from '../schema.base';

export type ID = string;

export interface IComic extends IData<ID>, ITitled { }
