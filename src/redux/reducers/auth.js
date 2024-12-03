/* eslint-disable */
import {clearAllItem, getItem, setItem} from 'src/services/apiService';
import {STORAGE} from '@constants/enum';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  userData: {
    access_token: '',
    refresh_token: '',
    profileInfo: {},
  },
  isFirstTime: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state = null;
    },
    setTokens: state => {
      state.userData.access_token = getItem(STORAGE.ACCESS_TOKEN);
      state.userData.refresh_token = getItem(STORAGE.REFRESH_TOKEN);
    },
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    changeFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {changeFirstTime, saveUserData, logout, setTokens} =
  authSlice.actions;

export default authSlice.reducer;
