import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes';
import Welcome from '../screens/Welcome/index';

const Stack = createStackNavigator();

export default function Naviagtion() {

  return (
      <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="Main" component={Routes} options={{ headerShown: false}} /> 
      </Stack.Navigator>
  )
}