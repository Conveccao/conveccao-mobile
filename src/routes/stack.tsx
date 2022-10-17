import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './routes';
import Welcome from '../screens/Welcome/index';
import { propsNavigationStack } from './Models';

const { Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function Naviagtion() {

  return (
      <Navigator>
            <Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Screen name="Main" component={Routes} options={{ headerShown: false}} /> 
      </Navigator>
  )
}