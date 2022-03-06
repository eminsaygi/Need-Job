import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import JobsStack from './Navigations/JobsStack';
import Stores from './Context/Store';

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
