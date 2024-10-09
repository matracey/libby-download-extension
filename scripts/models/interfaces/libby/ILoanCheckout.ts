import type { ISeriesEntry, IConstrainable } from "../common";
import type { ILoan } from "./ILoan";

export interface ILoanCheckout extends ILoan, ISeriesEntry, IConstrainable {
  availabilityType: "normal";
  bundledContent: unknown[];
  bundledContentTitleIds: unknown[];
  checkoutDate: string | Date;
  checkoutId: number;
  expireDate: string | Date;
  expires: string | Date;
  isAssigned: boolean;
  isFormatLockedIn: boolean;
  isLuckyDayCheckout: boolean;
  isReturnable: boolean;
  loanStamp: boolean;
  privateAccountId: number;
  renewableOn: string | Date;
  reserveId: string;
  websiteId: string;
}
