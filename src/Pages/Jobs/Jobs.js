import React from 'react';
import {View, Button, SafeAreaView, FlatList} from 'react-native';

const Jobs = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data.results}
        renderItem={renderJob}
        key={item => item.id}
        ListFooterComponent={<Footer></Footer>}></FlatList>
    </SafeAreaView>
  );
};

export default Jobs;
