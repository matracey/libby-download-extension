import { type IGetRequestDetails, isGetRequestDetails, type OnBeforeRequestDetails } from "./OnBeforeRequestDetails";

export interface ISentryRequestDetails extends OnBeforeRequestDetails {}

export const isSentryRequestDetails = (d: OnBeforeRequestDetails): d is ISentryRequestDetails =>
  new URL(d.url).host === "sentry.libbyapp.com";

export interface ISentrySyncRequestDetails extends IGetRequestDetails {}

export const isSentrySyncRequestDetails = (d: OnBeforeRequestDetails): d is ISentrySyncRequestDetails =>
  isGetRequestDetails(d) && isSentryRequestDetails(d) && new URL(d.url).pathname.endsWith("/sync");

export interface ISentryLoanRequestDetails extends IGetRequestDetails {}

export const isSentryLoanRequestDetails = (d: OnBeforeRequestDetails): d is ISentryLoanRequestDetails =>
  isGetRequestDetails(d) && isSentryRequestDetails(d) && /card\/\d+\/loan\/\d+/.test(new URL(d.url).pathname);
