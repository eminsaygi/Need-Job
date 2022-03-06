import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

const Loading = () => {
  return (
    <View style={Styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;