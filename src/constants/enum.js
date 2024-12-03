export const BUNDLE_ID = {
  ANDROID: 'com.demo',
  IOS: 'com.demo',
};

export const HEADERS = Object.freeze({
  ['Device-Type']: 'Device-Type',
  ['Refresh-Token']: 'Refresh-Token',
  ['Access-Token']: 'Access-Token',
});

export const STORAGE = Object.freeze({
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  FCM_TOKEN: 'fcm_token',
});

export const ACTION_TYPE = Object.freeze({
  IS_SKIP: 'IS_SKIP',
  IS_FIRST_TIME: 'IS_FIRST_TIME',
  CLEAR_REDUX_STATE: 'CLEAR_REDUX_STATE',
});

export const AXIOS_STATUS = Object.freeze({
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
});

export const API_ERRORS = {
  SOMETHING_WENT_WRONG: 'Something went wrong',
};

export const APP_THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};
