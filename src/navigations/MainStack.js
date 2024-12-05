import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from './navigation';
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  ProfileScreen,
} from '@screens/index';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={HomeScreen} name={NAVIGATION.SCREEN.HOME} />
      <Stack.Screen
        component={ProductScreen}
        name={NAVIGATION.SCREEN.PRODUCT}
      />
      <Stack.Screen component={CartScreen} name={NAVIGATION.SCREEN.CART} />
      <Stack.Screen
        component={ProfileScreen}
        name={NAVIGATION.SCREEN.PROFILE}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
