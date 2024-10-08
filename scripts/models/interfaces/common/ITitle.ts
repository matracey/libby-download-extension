import { ContentRatingType } from "../../enums/ContentRatingType";
import type { IContentBase } from "./IContentBase";
import type { INamedItem } from "./INamedItem";

export interface ITitle extends IContentBase {
  isPreReleaseTitle: boolean;
  isAvailable: boolean;
  estimatedReleaseDate: string | Date;
  juvenileEligible: boolean;
  youngAdultEligible: boolean;
  ratings: { [key in ContentRatingType]: INamedItem };
  bisacCodes: string[];
  contentAccessLevels: number;
}
