/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { HttpResponse, http } from 'msw';
import { faker } from '@faker-js/faker';

faker.seed(1);

const baseURL = '*';
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  http.get(`${baseURL}/api/v1/Token/AmplifyPortal`, () => {
    const resultArray = [
      [getGetAmplifyPortalToken200Response(), { status: 200 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/Token/AmplifyPortal/Production`, () => {
    const resultArray = [
      [getGetAmplifyPortalProductionToken200Response(), { status: 200 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/AmplifyApplication/userapplications`, () => {
    const resultArray = [
      [getUserApplications200Response(), { status: 200 }],
      [getUserApplications400Response(), { status: 400 }],
      [null, { status: 500 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/FeatureToggle/:applicationName`, () => {
    const resultArray = [
      [getGetFeatureToggleFromApplicationName200Response(), { status: 200 }],
      [getGetFeatureToggleFromApplicationName400Response(), { status: 400 }],
      [getGetFeatureToggleFromApplicationName404Response(), { status: 404 }],
      [getGetFeatureToggleFromApplicationName500Response(), { status: 500 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/AmplifyApplication/token`, () => {
    const resultArray = [
      [getGetSasImageToken200Response(), { status: 200 }],
      [getGetSasImageToken400Response(), { status: 400 }],
      [null, { status: 500 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/ReleaseNotes`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/ReleaseNotes/myreleasenotes`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/ReleaseNotes/:applicationName/:releaseId`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/ReleaseNotes/GetContainerSasUri`, () => {
    const resultArray = [
      [getGetContainerSasUri200Response(), { status: 200 }],
      [getGetContainerSasUri401Response(), { status: 401 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/api/v1/ServiceNow/incident`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/api/v1/Slack/fileUpload`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/api/v1/Slack/postmessage`, () => {
    const resultArray = [[null, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/Tutorial/:applicationName`, () => {
    const resultArray = [
      [getGetTutorialsForApplication200Response(), { status: 200 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/api/v1/Tutorial/SASToken`, () => {
    const resultArray = [
      [getGetTutorialSasToken200Response(), { status: 200 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
];

export function getUserApplications200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.lorem.slug(1),
    name: faker.person.fullName(),
    adGroups: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    url: faker.internet.url(),
    accessRoles: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      role: faker.lorem.slug(1),
      description: faker.lorem.slug(1),
    })),
    description: faker.lorem.slug(1),
    contentTabs: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      name: faker.person.fullName(),
      chapters: [
        ...new Array(
          faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })
        ).keys(),
      ].map((_) => ({
        order: faker.number.int({ min: undefined, max: undefined }),
        title: faker.lorem.slug(1),
        subTitle: faker.lorem.slug(1),
        content: faker.lorem.slug(1),
      })),
    })),
    longDescription: faker.lorem.slug(1),
    category: faker.lorem.slug(1),
    version: faker.lorem.slug(1),
    applicationInsightAPI: faker.lorem.slug(1),
    apI_Id: faker.lorem.slug(1),
    apiurl: faker.internet.url(),
    monitored: faker.datatype.boolean(),
    productOwners: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
  }));
}

export function getUserApplications400Response() {
  return {
    type: faker.lorem.slug(1),
    title: faker.lorem.slug(1),
    status: faker.number.int({ min: undefined, max: undefined }),
    detail: faker.lorem.slug(1),
    instance: faker.lorem.slug(1),
  };
}

export function getGetFeatureToggleFromApplicationName200Response() {
  return {
    applicationName: faker.person.fullName(),
    features: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      uuid: faker.lorem.slug(1),
      featureKey: faker.lorem.slug(1),
      description: faker.lorem.slug(1),
      activeUsers: [
        ...new Array(
          faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })
        ).keys(),
      ].map((_) => ({
        id: faker.lorem.slug(1),
        displayName: faker.person.fullName(),
        mail: faker.lorem.slug(1),
        userPrincipalName: faker.person.fullName(),
      })),
      activeEnvironments: [
        ...new Array(
          faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })
        ).keys(),
      ].map((_) => faker.lorem.slug(1)),
    })),
  };
}

export function getGetFeatureToggleFromApplicationName400Response() {
  return {
    developerMessage: faker.lorem.slug(1),
    userMessage: faker.lorem.slug(1),
    code: faker.lorem.slug(1),
    httpStatusCode: faker.number.int({ min: undefined, max: undefined }),
  };
}

export function getGetFeatureToggleFromApplicationName404Response() {
  return {
    developerMessage: faker.lorem.slug(1),
    userMessage: faker.lorem.slug(1),
    code: faker.lorem.slug(1),
    httpStatusCode: faker.number.int({ min: undefined, max: undefined }),
  };
}

export function getGetFeatureToggleFromApplicationName500Response() {
  return {
    developerMessage: faker.lorem.slug(1),
    userMessage: faker.lorem.slug(1),
    code: faker.lorem.slug(1),
    httpStatusCode: faker.number.int({ min: undefined, max: undefined }),
  };
}

export function getGetContainerSasUri200Response() {
  return faker.lorem.slug(1);
}

export function getGetContainerSasUri401Response() {
  return {
    type: faker.lorem.slug(1),
    title: faker.lorem.slug(1),
    status: faker.number.int({ min: undefined, max: undefined }),
    detail: faker.lorem.slug(1),
    instance: faker.lorem.slug(1),
  };
}

export function getGetTutorialsForApplication200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    shortName: faker.person.fullName(),
    path: faker.lorem.slug(1),
    application: faker.lorem.slug(1),
    steps: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int(),
      title: faker.lorem.slug(1),
      body: faker.lorem.slug(1),
      key: faker.lorem.slug(1),
      position: faker.helpers.arrayElement([
        'TOP_LEFT',
        'TOP_RIGHT',
        'BOTTOM_LEFT',
        'BOTTOM_RIGHT',
        'CENTER',
      ]),
      imgUrl: faker.internet.url(),
    })),
    showInProd: faker.datatype.boolean(),
    willPopUp: faker.datatype.boolean(),
    dynamicPositioning: faker.datatype.boolean(),
  }));
}

export function getGetTutorialSasToken200Response() {
  return faker.lorem.slug(1);
}

export function getGetSasImageToken200Response() {
  return {
    uri: faker.lorem.slug(1),
  };
}

export function getGetSasImageToken400Response() {
  return {
    type: faker.lorem.slug(1),
    title: faker.lorem.slug(1),
    status: faker.number.int({ min: undefined, max: undefined }),
    detail: faker.lorem.slug(1),
    instance: faker.lorem.slug(1),
  };
}

export function getGetAmplifyPortalProductionToken200Response() {
  return faker.lorem.slug(1);
}

export function getGetAmplifyPortalToken200Response() {
  return faker.lorem.slug(1);
}
