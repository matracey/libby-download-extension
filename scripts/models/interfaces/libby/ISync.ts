import type { ICard } from "./ICard";
import type { ILoanCheckout } from "./ILoanCheckout";
import type { ILoanHold } from "./ILoanHold";
import type { ISyncSummary } from "./ISyncSummary";

export interface ISync {
  result: string;
  cards: ICard[];
  loans: ILoanCheckout[];
  holds: ILoanHold[];
  summary: { [cardId: string]: ISyncSummary };
}
