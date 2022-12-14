import { StatusBar } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Details from '../screens/Details';

import { RootStackParamList } from './types';
import TabRoutes from './tab.routes';
import AlertsDetails from '../screens/AlertsDetails';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>()

export default function StackRoutes() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Navigator
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Screen
          name="Home"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes da estação',
            headerStyle: {
              backgroundColor: '#0A94ED',
            },
          headerTintColor: '#f8f8ff',
          headerTitleStyle: {
              fontWeight: 'normal',
          },
          }}
        />
        <Screen
          name="Alerts"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Screen
          name="AlertsDetails"
          component={AlertsDetails}
          options={{
            title: 'Detalhes do alerta',
            headerStyle: {
              backgroundColor: '#0A94ED',
            },
            headerTintColor: '#f8f8ff',
            headerTitleStyle: {
              fontWeight: 'normal'
            }
          }}
        />
      </Navigator>
    </>
  )
}
