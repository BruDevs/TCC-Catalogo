import * as React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BackupDesktop from './Services-Desktop/BackupDesktop';
import LimpezaDesktop from './Services-Desktop/LimpezaDesktop';
import ReparoDesktop from './Services-Desktop/ReparoDesktop';
import Desktop from './Desktop'


const Stack = createStackNavigator();

export default function RotasDesktop(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Desktop" component={Desktop} options={{title: null}} />
    <Stack.Screen name="BackupDesktop" component={BackupDesktop} options={{title: 'Backup Desktop'}} />
    <Stack.Screen name="LimpezaDesktop" component={LimpezaDesktop} options={{title: 'Limpeza Desktop'}} />
    <Stack.Screen name="ReparoDesktop" component={ReparoDesktop} options={{title: 'Reparo Desktop'}} />
    </Stack.Navigator>
)
}