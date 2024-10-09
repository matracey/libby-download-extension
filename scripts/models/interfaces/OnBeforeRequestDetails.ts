export type OnBeforeRequestDetails = browser.webRequest._OnBeforeRequestDetails;

export interface IGetRequestDetails extends OnBeforeRequestDetails {
  method: "GET";
}

export const isGetRequestDetails = (d: OnBeforeRequestDetails): d is IGetRequestDetails => d.method == "GET";
