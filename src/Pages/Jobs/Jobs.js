import React from 'react';
import {View,Button} from 'react-native';

const Jobs = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('DetailsPage')}
        title="Detay Sayfasını Aç"
      />
    </View>
  );
};

export default Jobs;
