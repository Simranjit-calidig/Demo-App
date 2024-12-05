import React, {useRef, useState} from 'react';
import MainStack from './MainStack';
import NAVIGATION from './navigation';
import CustomTabBar from './BottomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  ProfileScreen,
} from '@screens/index';

const BottomTabs = createBottomTabNavigator();

export default () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}>
      <BottomTabs.Screen component={HomeScreen} name={NAVIGATION.SCREEN.HOME} />
      <BottomTabs.Screen
        component={ProductScreen}
        name={NAVIGATION.SCREEN.PRODUCT}
      />
      <BottomTabs.Screen component={CartScreen} name={NAVIGATION.SCREEN.CART} />
      <BottomTabs.Screen
        component={ProfileScreen}
        name={NAVIGATION.SCREEN.PROFILE}
      />
      {/* <BottomTabs.Screen name={NAVIGATION.STACK.TAB} children={MainStack} /> */}
    </BottomTabs.Navigator>
  );
};
