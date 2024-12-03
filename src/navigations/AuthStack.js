import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from './navigation';
import {LoginScreen} from '@screens/index';

export const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={LoginScreen}
        name={NAVIGATION.AUTH.LOGIN_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
