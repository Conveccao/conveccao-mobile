import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import light from './src/theme/light';

// import TabRoutes from './src/routes/routes';

import Navigation from './src/screens/Welcome/index'
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return (
      <ThemeProvider theme={light}>
       <NavigationContainer> 
        <Navigation/>
       </NavigationContainer> 
      </ThemeProvider>    
  );
}