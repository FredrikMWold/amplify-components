import { FileWithPath } from 'react-dropzone';

import { ApiError, ServiceNowIncidentResponse } from 'src/api';

export enum UrgencyOption {
  NO_IMPACT = 'I am not impacted',
  IMPEDES = 'It impedes my progress',
  UNABLE = 'I am unable to work',
}

export enum FeedbackType {
  BUG = 'bug',
  SUGGESTION = 'suggestion',
}
export enum StatusEnum {
  error = 'error',
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  partial = 'partial',
}

export type FeedbackContentLocalStorage = {
  title: string;
  description: string;
  urgency?: string;
  url?: string;
};

export type FeedbackContentType = FeedbackContentLocalStorage & {
  attachments?: FileWithPath[];
};

export type RequestStatusType = {
  status: StatusEnum;
  serviceNowId?: string;
  errorText?: string;
};

export type AttachmentStatus = RequestStatusType & {
  fileName: string;
};

export type FeedbackLocalStorage = {
  feedbackContent: FeedbackContentLocalStorage;
  serviceNowRequestResponse: RequestStatusType;
};

export type SlackStatus = {
  slackRequestResponse: RequestStatusType;
  slackAttachmentsResponse: AttachmentStatus[];
};
export type FeedbackRequestStatus = FeedbackLocalStorage & SlackStatus;

export type UpdateRequestStatusHandler = ({
  status,
  response,
  error,
  filename,
}: {
  status: StatusEnum;
  response?: ServiceNowIncidentResponse;
  error?: ApiError;
  filename?: string;
}) => void;

export enum Browsers {
  EDGE = 'Edge',
  EDGE_SHORT = 'Edg',
  FIREFOX = 'Firefox',
  CHROME = 'Chrome',
  SAFARI = 'Safari',
}
