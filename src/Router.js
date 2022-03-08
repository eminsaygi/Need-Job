import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobsStack from './Navigations/JobsStack';
import Stores from './Context/store';
import Login from './Pages/Login';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Provider store={Stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage'>
          <Stack.Screen name="LoginPage" component={Login}></Stack.Screen>
        </Stack.Navigator>
        <Stack.Screen name="JobsPage" component={JobsStack}></Stack.Screen>

        {/* <JobsStack></JobsStack> */}
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
