import React, {forwardRef, Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnistylesRuntime} from 'react-native-unistyles';
import {useSelector} from '@redux/hooks';
import NAVIGATION from './navigation';
import {COLORS} from 'src/styles/themes';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Routes = forwardRef((props, ref) => {
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const {userData} = useSelector(state => state.auth); //refresh_token , access_token

  // console.log("Routes", userData);
  // console.log("THEME-MODE", UnistylesRuntime.themeName);
  return (
    <NavigationContainer
      ref={ref}
      // theme={{colors: {background: isDarkMode ? COLORS.black : COLORS.white}}}
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={NAVIGATION.ROUTES.ROUTE_HOME} component={<></>} /> */}
        <Stack.Screen name={NAVIGATION.APP} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Routes;
