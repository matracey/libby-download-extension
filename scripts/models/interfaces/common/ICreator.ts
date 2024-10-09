import type { INamedItem } from "./INamedItem";

export interface ICreator extends INamedItem {
  role: string;
  sortName: string;
}
