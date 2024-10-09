import { type IGetRequestDetails, type OnBeforeRequestDetails, isGetRequestDetails } from "./OnBeforeRequestDetails";

export interface IOverdriveThunderApiRequestDetails extends OnBeforeRequestDetails {}

export const isOverdriveThunderApiRequestDetails = (
  d: OnBeforeRequestDetails
): d is IOverdriveThunderApiRequestDetails =>
  new URL(d.url).host === "thunder.api.overdrive.com" && new URL(d.url).pathname.startsWith("v2");

export interface IOverdriveThunderApiLibrariesGetRequestDetails extends IOverdriveThunderApiRequestDetails {}

export const isOverdriveThunderApiLibrariesGetRequestDetails = (
  d: OnBeforeRequestDetails
): d is IOverdriveThunderApiLibrariesGetRequestDetails | IGetRequestDetails =>
  isGetRequestDetails(d) && isOverdriveThunderApiRequestDetails(d) && new URL(d.url).pathname.endsWith("/libraries");

export interface IOverdriveThunderApiLibraryMediaGetRequestDetails extends IOverdriveThunderApiRequestDetails {}

export const isOverdriveThunderApiLibraryMediaGetRequestDetails = (
  d: OnBeforeRequestDetails
): d is IOverdriveThunderApiLibraryMediaGetRequestDetails | IGetRequestDetails =>
  isGetRequestDetails(d) &&
  isOverdriveThunderApiRequestDetails(d) &&
  /\/libraries\/.+\/media\/.+\/?$/.test(new URL(d.url).pathname);
