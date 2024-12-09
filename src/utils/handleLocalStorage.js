import {saveUserData} from '@redux/reducers/auth';
import {saveDefaultLanguage, saveDefaultTheme} from '@redux/reducers/settings';
import store from '@redux/store';
import i18n from 'i18next';
import {UnistylesRuntime} from 'react-native-unistyles';
import {getItem} from 'src/services/apiService';
import {STORAGE} from '@constants/enum';

const {dispatch} = store;
const checkLocalStorage = () => {
  // get user Data
  // const access_token = getItem(STORAGE.ACCESS_TOKEN);
  // const refresh_token = getItem(STORAGE.REFRESH_TOKEN);
  // dispatch(saveUserData({ access_token, refresh_token }));

  const isLoggedIn = getItem(STORAGE.IS_LOGGED_IN);
  console.log('FROM LOCAL STORAGE', isLoggedIn);
  dispatch(saveUserData({isLoggedIn}));

  // get default theme
  // const defaultTheme = getItem('defaultTheme');
  // if (defaultTheme) {
  //   UnistylesRuntime.setTheme(defaultTheme.myTheme);
  //   dispatch(saveDefaultTheme(defaultTheme));
  // }
  // get default language
  // const defaultLanguage = getItem('defaultLanguage');
  // if (defaultLanguage) {
  //   i18n.changeLanguage(defaultLanguage.sortName);
  //   dispatch(saveDefaultLanguage(defaultLanguage));
  // }
};

export default checkLocalStorage;
