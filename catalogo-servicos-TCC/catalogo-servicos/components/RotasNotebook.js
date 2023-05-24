import * as React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BackupNote from './Services-Notebook/BackupNote';
import LimpezaNote from './Services-Notebook/LimpezaNote';
import ReparoNote from './Services-Notebook/ReparoNote';
import Notebook from './Notebook'


const Stack = createStackNavigator();

export default function RotasNotebook(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Notebook" component={Notebook} options={{title: null}} />
    <Stack.Screen name="BackupNote" component={BackupNote} options={{title: 'Backup Notebook'}} />
    <Stack.Screen name="LimpezaNote" component={LimpezaNote} options={{title: 'Limpeza Notebook'}} />
    <Stack.Screen name="ReparoNote" component={ReparoNote} options={{title: 'Reparo Notebook'}} />
    </Stack.Navigator>
)
}