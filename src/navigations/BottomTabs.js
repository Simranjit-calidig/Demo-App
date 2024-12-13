import React, {useRef, useState} from 'react';
import NAVIGATION from './navigation';
import CustomTabBar from './BottomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  ProfileScreen,
  ChatScreen,
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
      <BottomTabs.Screen
        component={ProfileScreen}
        name={NAVIGATION.SCREEN.PROFILE}
      />
    </BottomTabs.Navigator>
  );
};
