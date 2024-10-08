import type { INamedItem } from "./INamedItem";
import { ContentCoverKey } from "../../enums/ContentCoverKey";
import type { IContentCover } from "./IContentCover";
import type { IContentDigitalFormat } from "./IContentDigitalFormat";

export interface IContentBase {
  holdsCount: number;
  ownedCopies: number;
  sample: { href: string };
  subtitle?: string;
  isOwned: boolean;
  isHoldable: boolean;
  isAdvantageFiltered: boolean;
  availableCopies: number;
  luckyDayOwnedCopies: number;
  luckyDayAvailableCopies: number;
  subjects: INamedItem[];
  type: INamedItem;
  covers: { [key in ContentCoverKey]: IContentCover };
  id: string;
  firstCreatorName: string;
  firstCreatorId: number;
  firstCreatorSortName: string;
  title: string;
  sortTitle: string;
  starRating: number;
  starRatingCount: number;
  edition?: string;
  publishDate: string | Date;
  publishDateText: string;
  formats: IContentDigitalFormat[];
  publisherAccount: INamedItem;
}
