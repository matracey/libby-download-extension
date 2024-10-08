import type { IContentBase, IContentFormat, INamedItem } from "../common";

export interface ILoan extends IContentBase {
  overDriveFormat: IContentFormat;
  otherFormats: INamedItem[];
  readiverseFormat: IContentFormat;
  cardId: string;
}
