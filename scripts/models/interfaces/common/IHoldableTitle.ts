import type { ITitle } from "./ITitle";

export interface IHoldableTitle extends ITitle {
  holdsRatio: number;
  estimatedWaitDays: number;
  isFastlane: boolean;
}
