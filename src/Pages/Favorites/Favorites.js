import React from 'react';
import {View, Button} from 'react-native';

const Favorites = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('DetailsPage')}
        title="Go to notifications"
      />
    </View>
  );
};

export default Favorites;
