import type { IContentFormat } from "./IContentFormat";
import type { IContentDigitalFormatIdentifier } from "./IContentDigitalFormatIdentifier";
import type { IContentDigitalFormatRight } from "./IContentDigitalFormatRight";
import { ContentFulfillmentType } from "../../enums/ContentFulfillmentType";

export interface IContentDigitalFormat extends IContentFormat {
  identifiers: IContentDigitalFormatIdentifier[];
  rights: IContentDigitalFormatRight[];
  fileSize?: number;
  onSaleDateUtc: string | Date;
  duration?: string;
  isBundleParent: boolean;
  isbn?: string;
  bundledContent: unknown[];
  sample?: { href: string };
  fulfillmentType: ContentFulfillmentType;
  partCount?: number;
  isLockedIn?: boolean;
}
