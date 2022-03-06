import React from 'react';
import {View} from 'react-native';

const PageButton = ({navigation, title, routeName}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate(routeName)} title={title} />
    </View>
  );
};

export default PageButton;
