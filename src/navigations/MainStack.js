import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from './navigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'exp'} children={<></>} />
    </Stack.Navigator>
  );
};

export default MainStack;
