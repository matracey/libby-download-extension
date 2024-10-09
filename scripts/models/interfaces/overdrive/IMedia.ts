import type { INamedItem } from "../common/INamedItem";
import type { IHoldableTitle } from "../common/IHoldableTitle";

import type { ISeriesEntry } from "../common/ISeriesEntry";

import type { IConstrainable } from "../common/IConstrainable";
import type { ICreator } from "../common/ICreator";

export interface IMedia extends IHoldableTitle, ISeriesEntry, IConstrainable {
  reserveId: string;
  bisac: IBisacCode[];
  levels: unknown[];
  creators: ICreator[];
  languages: INamedItem[];
  imprint: INamedItem;
  reviewCounts: IReviewCounts;
  publisher: INamedItem;
  description: string;
  availabilityType: string;
  isRecommendableToLibrary: boolean;
  visitorEligible: boolean;
  classifications: unknown;
}

interface IBisacCode {
  code: string;
  description: string;
}

interface IReviewCounts {
  premium: number;
  publisherSupplier: number;
}
