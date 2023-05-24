import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import RotasNotebook from './RotasNotebook';
import RotasDesktop from './RotasDesktop.js';
import RotasPhone from './RotasPhone';
import Home from './Home.js';

const Tab = createBottomTabNavigator();

export default function RotasNavBar()
{
  return(
    
    <Tab.Navigator initialRouteName ="Home" screenOptions={{headerShow:false}}>

    <Tab.Screen name="Home" component={Home} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/HomeIcon.png')} style={estilo.img}/>), }}/>
    
    <Tab.Screen name="Smartphone" component={RotasPhone} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/CelularIcon.png')} style={estilo.img}/>), }}/>

    <Tab.Screen name="Desktop" component={RotasDesktop} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/DesktopIcon.png')} style={estilo.img}/>), }}/>

    <Tab.Screen name="Notebook" component={RotasNotebook} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/NotebookIcon.png')} style={estilo.img}/>), }}/>

    </Tab.Navigator>
  );
}

const estilo = StyleSheet.create({


img:{
  height:38,
  width: 38
}
})