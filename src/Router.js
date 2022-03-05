import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Jobs from './Pages/Jobs';
import Detail from './Pages/Details';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="JobsDrawerPage"
          component={Jobs}
          options={{title: 'Jobs'}}></Drawer.Screen>
        <Drawer.Screen
          name="DetailsDrawerPage"
          component={Detail}
          options={{title: 'Details'}}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
