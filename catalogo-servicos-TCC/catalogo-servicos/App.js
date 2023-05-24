import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RotasNavBar from './components/RotasNavBar.js';


export default function App(){

  return(
  <> 
  <NavigationContainer>
  <RotasNavBar />
  </NavigationContainer>
  </>
  );
}

