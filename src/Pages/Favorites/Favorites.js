import React from 'react';
import {View, Button} from 'react-native';

const Favorites = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('JobsPage')}
        title="Job sayfasını aç"
      />
    </View>
  );
};

export default Favorites;
