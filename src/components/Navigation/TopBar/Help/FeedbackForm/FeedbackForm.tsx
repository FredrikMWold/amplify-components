import { FC, useMemo, useState } from 'react';
import { FileWithPath } from 'react-dropzone';

import { tokens } from '@equinor/eds-tokens';
import { useMutation } from '@tanstack/react-query';

import Success from './components/Success';
import {
  FeedbackContentType,
  FeedbackEnum,
  UrgencyOption,
} from './FeedbackForm.types';
import {
  createServiceNowDescription,
  createSlackMessage,
} from './FeedbackForm.utils';
import FeedbackFormInner from './FeedbackFormInner';
import { ServiceNowUrgency } from 'src/api/models/ServiceNowUrgency';
import { PortalService } from 'src/api/services/PortalService';
import { useAuth } from 'src/providers/AuthProvider/AuthProvider';
import { useSnackbar } from 'src/providers/SnackbarProvider';

import styled from 'styled-components';

const { spacings } = tokens;

const Container = styled.div`
  width: 700px;
  height: 580px;
  padding: 0 ${spacings.comfortable.medium} ${spacings.comfortable.medium}
    ${spacings.comfortable.medium};
`;

interface FeedbackFormProps {
  onClose: () => void;
  selectedType: FeedbackEnum;
}

const FeedbackForm: FC<FeedbackFormProps> = ({ onClose, selectedType }) => {
  const { account } = useAuth();
  const userEmail = account?.username;
  const { showSnackbar } = useSnackbar();

  const [feedbackContent, setFeedbackContent] = useState<FeedbackContentType>({
    title: '',
    description: '',
    anonymous: false,
  });

  const {
    mutateAsync: slackFileUpload,
    isLoading: isFileUploadLoading,
    isSuccess: isFileUploadSuccess,
  } = useMutation(['slackFileUpload', feedbackContent], (formData: FormData) =>
    PortalService.fileUpload(formData)
  );

  const {
    mutateAsync: slackPostMessage,
    isLoading: isPostMessageLoading,
    isSuccess: isPostMessageSuccess,
  } = useMutation(['slackPostMessage', feedbackContent], (formData: FormData) =>
    PortalService.postmessage(formData)
  );

  const {
    mutateAsync: serviceNowIncident,
    isLoading: isServiceNowLoading,
    isSuccess: isServiceNowSuccess,
    data: response,
  } = useMutation(
    ['serviceNowIncident', feedbackContent],
    async (formData: FormData) => PortalService.createIncident(formData)
  );

  const relevantRequestsIsSuccess = useMemo(() => {
    const booleanArray: boolean[] = [];
    if (
      feedbackContent?.attachments &&
      feedbackContent?.attachments?.length > 0
    ) {
      booleanArray.push(isFileUploadSuccess);
    }
    if (selectedType === FeedbackEnum.BUG) {
      booleanArray.push(isServiceNowSuccess);
    }
    booleanArray.push(isPostMessageSuccess);
    return !booleanArray.includes(false) && booleanArray.length > 0;
  }, [
    feedbackContent?.attachments,
    isFileUploadSuccess,
    isPostMessageSuccess,
    isServiceNowSuccess,
    selectedType,
  ]);

  const requestIsLoading = useMemo(() => {
    return isPostMessageLoading || isFileUploadLoading || isServiceNowLoading;
  }, [isFileUploadLoading, isPostMessageLoading, isServiceNowLoading]);

  const serviceNowNumber = useMemo(() => {
    if (selectedType === FeedbackEnum.BUG) {
      if (!response?.number) return 'Not found';
      return response.number;
    }
  }, [response?.number, selectedType]);

  const updateFeedback = (
    key: keyof FeedbackContentType,
    newValue: string | UrgencyOption | FileWithPath[] | boolean
  ) => {
    if (key === 'attachments' && feedbackContent.attachments) {
      setFeedbackContent((prev) => {
        return {
          ...prev,
          [key]: [...(newValue as FileWithPath[])],
        };
      });
    } else {
      setFeedbackContent({ ...feedbackContent, [key]: newValue });
    }
  };

  const getUrgencyNumber = (urgency: UrgencyOption) => {
    switch (urgency) {
      case UrgencyOption.UNABLE:
        return ServiceNowUrgency.CRITICAL;
      case UrgencyOption.IMPEDES:
        return ServiceNowUrgency.MODERATE;
      case UrgencyOption.NO_IMPACT:
        return ServiceNowUrgency.NORMAL;
    }
  };

  const handleSave = async () => {
    try {
      const contentFormData = new FormData();
      contentFormData.append(
        'comment',
        createSlackMessage(feedbackContent, selectedType, userEmail)
      );

      await slackPostMessage(contentFormData);

      if (feedbackContent.attachments && feedbackContent.attachments[0]) {
        const fileFormData = new FormData();
        feedbackContent.attachments.forEach((attachment) =>
          fileFormData.append('file', attachment)
        );
        await slackFileUpload(fileFormData);
      }

      if (selectedType === FeedbackEnum.BUG && userEmail) {
        const serviceNowFormData = new FormData();
        serviceNowFormData.append('ConfigurationItem', '117499');
        serviceNowFormData.append('Title', feedbackContent.title);
        serviceNowFormData.append(
          'Description',
          createServiceNowDescription(feedbackContent)
        );
        serviceNowFormData.append('CallerEmail', userEmail);
        if (feedbackContent.urgency) {
          serviceNowFormData.append(
            'urgency',
            getUrgencyNumber(
              feedbackContent.urgency as UrgencyOption
            ).toString()
          );
        }
        if (
          feedbackContent.attachments &&
          feedbackContent.attachments.length > 0
        ) {
          feedbackContent.attachments.forEach((attachment) =>
            serviceNowFormData.append('Image', attachment)
          );
        }
        await serviceNowIncident(serviceNowFormData);
      }
    } catch (err) {
      showSnackbar('There was an error sending your report');
    }
  };

  if (relevantRequestsIsSuccess)
    return (
      <Container>
        <Success onClose={onClose} serviceNowId={serviceNowNumber} />
      </Container>
    );

  return (
    <Container>
      <FeedbackFormInner
        selectedType={selectedType}
        feedbackContent={feedbackContent}
        updateFeedback={updateFeedback}
        handleSave={handleSave}
        onClose={onClose}
        requestIsLoading={requestIsLoading}
      />
    </Container>
  );
};

export default FeedbackForm;
