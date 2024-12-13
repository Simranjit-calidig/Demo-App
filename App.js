import './gesture-handler';
import './src/styles/unistyles';
import React, {useLayoutEffect, useEffect} from 'react';
import {Platform, UIManager, YellowBox, LogBox} from 'react-native';
import store from '@redux/store';
import checkLocalStorage from '@utils/handleLocalStorage';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ErrorBoundary} from '@screens/ErrorScreen';
import {NavigationService} from '@services';
import Routes from '@navigations/Routes';

if (__DEV__) {
  require('./ReactotronConfig');
}

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  LogBox.ignoreAllLogs(true);
  YellowBox.ignoreWarnings(['']);

  useLayoutEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ErrorBoundary>
        <Provider store={store}>
          <Routes ref={navRef => NavigationService.setNavigatorRef(navRef)} />
          <FlashMessage position="top" />
        </Provider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
};

export default App;
