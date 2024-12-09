import {
  GoogleIcon,
  AppleIcon,
  FackBookIcon,
} from '@assets/SVGs/socialLoginIcons';

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
  IS_LOGGED_IN: 'isLoggedIn',
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

export const SOCIAL_LOGIN = [
  {
    key: 'google',
    title: 'Continue with Google',
    icon: <GoogleIcon />,
  },
  // {
  //   key: 'apple',
  //   title: 'Continue with Apple',
  //   icon: <AppleIcon />,
  // },
  // {
  //   key: 'facebook',
  //   title: 'Continue with Facebook',
  //   icon: <FackBookIcon />,
  // },
];
