import type { IDetailedSeries } from "./IDetailedSeries";

export interface ISeriesEntry {
  series?: string;
  detailedSeries?: IDetailedSeries;
  isBundledChild: boolean;
}
