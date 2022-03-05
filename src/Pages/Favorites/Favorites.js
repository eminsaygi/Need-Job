import React from 'react';
import {View, Button} from 'react-native';

const Favorites = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('JobDrawer')}
        title="Yan Menü Aç"
      />
    </View>
  );
};

export default Favorites;
