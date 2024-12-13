import React, {forwardRef, Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnistylesRuntime} from 'react-native-unistyles';
import {useSelector} from '@redux/hooks';
import NAVIGATION from './navigation';
import {COLORS} from 'src/styles/themes';
import AuthStack from './AuthStack';
import {ChatScreen, ProductDetailScreen, ErrorScreen} from '@screens/index';
import AppDrawer from './Drawer';

//So in this app we are you Nested navigation to get the functionality of Bottom Tabs and App Drawer

const Stack = createNativeStackNavigator();

const Routes = forwardRef((props, ref) => {
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const {userData} = useSelector(state => state.auth);

  // console.log("Routes", userData);
  // console.log("THEME-MODE", UnistylesRuntime.themeName);

  const isUserLoggedIn = userData?.isLoggedIn;
  return (
    <NavigationContainer
      ref={ref}
      // theme={{colors: {background: isDarkMode ? COLORS.black : COLORS.white}}}
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isUserLoggedIn ? (
          <Stack.Screen name={NAVIGATION.STACK.AUTH} component={AuthStack} />
        ) : (
          <Stack.Screen
            component={AppDrawer}
            name={NAVIGATION.STACK.APP_DRAWER}
          />
        )}
        {!!isUserLoggedIn && (
          <Stack.Screen
            component={ProductDetailScreen}
            name={NAVIGATION.SCREEN.PRODUCT_DETAIL_SCREEN}
          />
        )}
        {!!isUserLoggedIn && (
          <Stack.Screen component={ChatScreen} name={NAVIGATION.SCREEN.CHAT} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Routes;
