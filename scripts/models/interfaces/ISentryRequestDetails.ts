import { type OnBeforeRequestDetails } from "./OnBeforeRequestDetails";

export interface ISentryRequestDetails extends OnBeforeRequestDetails {}

export const isSentryRequestDetails = (d: OnBeforeRequestDetails): d is ISentryRequestDetails =>
  new URL(d.url).host === "sentry.libbyapp.com";
