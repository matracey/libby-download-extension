export interface IHold {
  autoCheckoutFlag: boolean;
  autoRenewFlag: boolean;
  suspensionFlag: boolean;
  holdListPosition: number;
  placedDate: string | Date;
  patronHoldsRatio: number;
  redeliveriesAutomatedCount: number;
  redeliveriesRequestedCount: number;
}
