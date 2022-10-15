import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '../screens/Favorites/index';
import Home from '../screens/Home/index';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Feather  from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
        
        <Tab.Screen 
        name="Estações" 
        component={Home}
        options = {{
            tabBarIcon: () => (
                <FontAwesome5
              name="angle-up"
              color={'red'}
              size={11}
            />
            )
            }}/>  
        
        <Tab.Screen 
        name="Favoritos" 
        component={Favorites} 
        options = {{
            tabBarIcon: () => (
                <Feather 
                name="star" 
                size={22} 
                color={'red'}/>
            )
            }}/>
        
        </Tab.Navigator>
    )}