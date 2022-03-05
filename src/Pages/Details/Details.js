import React from 'react';
import {View, Button} from 'react-native';

const Details = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('FavoritesPage')}
        title="Favori Sayfasını Aç"
      />
    </View>
  );
};

export default Details;
