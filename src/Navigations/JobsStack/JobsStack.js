import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Details from '../../Pages/Details';
import JobsDrawer from '../JobsDrawer';

const Stack = createNativeStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobDrawer"
        component={JobsDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsPage"
        component={Details}
        options={{
          headerTintColor: '#ef534f',
          title: 'Job Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default JobsStack;
