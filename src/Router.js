import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './Pages/Jobs';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="JobsPage" component={Jobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
