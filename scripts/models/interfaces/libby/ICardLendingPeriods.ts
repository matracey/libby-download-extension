import type { ILendingPeriod } from "./ILendingPeriod";
import type { IHasLuckyDay } from "./IHasLuckyDay";

export interface ICardLendingPeriods {
  book: ILendingPeriod & IHasLuckyDay;
  audiobook: ILendingPeriod & IHasLuckyDay;
  magazine: ILendingPeriod;
}