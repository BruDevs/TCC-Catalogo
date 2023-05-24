import * as React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ReparoPhone from './Services-Phone/ReparoPhone';
import BackupPhone from './Services-Phone/BackupPhone';

import Smartphone from './Smartphone'


const Stack = createStackNavigator();

export default function RotasPhone(){
  return(
    <Stack.Navigator>

    <Stack.Screen name="SmartPhone" component={Smartphone} options={{title: null}} />
    <Stack.Screen name="ReparoPhone" component={ReparoPhone} options={{title: 'Reparo Smartphone'}} />
    <Stack.Screen name="BackupPhone" component={BackupPhone} options={{title: 'Backup Smartphone'}} />
  
    </Stack.Navigator>
)
}