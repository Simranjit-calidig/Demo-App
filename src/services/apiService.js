import Axios from 'axios';
import {Platform} from 'react-native';
import {storage} from 'src/syncStorage';
import {HOST} from 'src/apis/endpoint';
import {STORAGE} from '@constants/enum';

const defaultOptions = (withAccess, withRefresh) => {
  const access_token = getItem(STORAGE.ACCESS_TOKEN);
  const fcm_token = getItem(STORAGE.FCM_TOKEN);
  const refresh_token = getItem(STORAGE.REFRESH_TOKEN);
  const headers = {};
  headers['Device-Type'] = Platform.OS;

  if (!!access_token && withAccess) {
    headers['Access-Token'] = access_token;
  }
  if (!!refresh_token && withRefresh) {
    headers['Refresh-Token'] = refresh_token;
  }
  if (!!fcm_token) {
    headers['Device-Token'] = fcm_token;
  }
  return {headers};
};

export const APIClient = (withAccess = true, withRefresh = false) => {
  const axios = Axios.create({
    baseURL: HOST,
    timeout: 20000,
    ...defaultOptions(withAccess, withRefresh),
  });

  axios.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      return Promise.reject(error);
    },
  );

  return axios;
};

export const setItem = (key, value) => {
  storage.set(key, JSON.stringify(value));
};

export const getItem = key => {
  const jsonUser = storage.getString(key);
  if (jsonUser) {
    try {
      const userObject = JSON.parse(jsonUser);
      return userObject;
    } catch (error) {
      console.log('Error parsing user data:', error);
      return null;
    }
  } else {
    console.log('No data found for the key:', key);
    return null;
  }
};

export const clearAllItem = () => storage.clearAll();
