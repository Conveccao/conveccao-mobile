
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Bell } from 'phosphor-react-native';

import Home from '../screens/Home';
import Alerts from '../screens/Alerts';

import { RootTabParamList } from './types';

const { Screen, Navigator } = createBottomTabNavigator<RootTabParamList>();

export default function TabRoutes() {
    return (
        <>
            <StatusBar barStyle={'default'}   backgroundColor={"#0a8be0"} />
            <Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0A94ED',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomEndRadius: 15,
                        borderBottomStartRadius: 15,
                    },
                    headerTintColor: '#f8f8ff',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                    tabBarActiveTintColor: '#f8f8ff',
                    tabBarInactiveTintColor: '#29292e',
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        position: 'absolute',

                        bottom: 5,
                        left: 10,
                        right: 10,

                        elevation: 0,

                        backgroundColor: '#0A94ED',
                        borderRadius: 15,
                        height: 90,
                        borderBottomWidth: 20,
                        borderTopWidth: 20,
                        borderTopColor: '#0A94ED',
                        borderColor: '#0A94ED',
                    },
                }}
            >
                <Screen name="HomeTab" component={Home} options={{
                    title: 'Estações',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                        return (
                            <House color={color} size={size} weight="fill" />
                        );
                        }

                        return (
                            <House color={color} size={size}/>
                        );
                    },
                }}
                />

                <Screen name="AlertTab" component={Alerts} options={{
                    title: 'Alertas',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                        return (
                            <Bell color={color} size={size} weight="fill" />
                        );
                        }

                        return (
                            <Bell color={color} size={size}/>
                        );
                    },
                }}
                />
            </Navigator>
        </>
    )
}