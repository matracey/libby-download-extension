import { type OnBeforeRequestDetails } from "./OnBeforeRequestDetails";

export interface IOverdriveThunderApiRequestDetails extends OnBeforeRequestDetails {}

export const isOverdriveThunderApiRequestDetails = (
  d: OnBeforeRequestDetails
): d is IOverdriveThunderApiRequestDetails =>
  new URL(d.url).host === "thunder.api.overdrive.com" && new URL(d.url).pathname.startsWith("v2");
