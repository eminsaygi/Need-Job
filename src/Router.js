import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Jobs from './Pages/Jobs';
import Detail from './Pages/Details';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobsPage">
        <Stack.Screen
          name="JobsPage"
          component={Jobs}
          options={{title: 'Jobs'}}
        />
        <Stack.Screen name="DetailsPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
