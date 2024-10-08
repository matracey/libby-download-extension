import { CardCountType } from "../../enums/CardCountType";
import { CardLimitType } from "../../enums/CardLimitType";
import type { ILibrary } from "./ILibrary";
import type { ICardLendingPeriods } from "./ICardLendingPeriods";

export interface ICard {
  cardId: string;
  cardName: string;
  createDate: string | Date;
  authorizeDate: string | Date;
  puid: string;
  isSessionUser: boolean;
  library: ILibrary;
  advantageKey: string;
  ilsName: string;
  username: string;
  emailAddress: string | null;
  limits: { [key in CardLimitType]: number };
  counts: { [key in CardCountType]: number };
  lendingPeriods: ICardLendingPeriods;
  accounts: number[];
  contentMask: number;
  isVisitingCard: boolean;
  canPlaceHolds: boolean;
  canRecommendTitles: boolean;
  allowReadingHistorySince: string | Date | null;
  publicLibraryMaturity: number;
}
