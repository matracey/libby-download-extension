import type { IColor } from "./IColor";

export interface IContentCover {
  href: string;
  height: number;
  width: number;
  primaryColor: IColor;
  isPlaceholderImage: boolean;
}
