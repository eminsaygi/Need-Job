import React from 'react';
import {View, Button} from 'react-native';

const Jobs = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('DetailsDrawerPage')}
        title="Go to notifications"
      />
    </View>
  );
};

export default Jobs;
