import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobsStack from './Navigations/JobsStack';
import Stores from './Context/store';
import Login from './Pages/Login';

const Router = () => {
  return (
    <Provider store={Stores}>
      <NavigationContainer>
        <JobsStack></JobsStack>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
