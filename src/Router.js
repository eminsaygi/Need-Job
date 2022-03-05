import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import JobsStack from './Navigations/JobsStack';

const Router = () => {
  return (
    <NavigationContainer>
      <JobsStack></JobsStack>
    </NavigationContainer>
  );
};

export default Router;
