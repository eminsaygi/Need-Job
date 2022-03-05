import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Router = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Ana Sayfa</Text>
    </SafeAreaView>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
