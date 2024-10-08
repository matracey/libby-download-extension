import type { IHold, IHoldableTitle } from "../common";
import type { ILoan } from "./ILoan";

export interface ILoanHold extends IHoldableTitle, ILoan, IHold {}
