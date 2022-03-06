import React,{useEffect,useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Config from '.react-native-config';

import Error from '../../Assets/Animations/error.json'
import JobCard from '../../Components/JobCard'
import PageButton from '../../Components/Buttons'
import useFetch from '../../Hooks/useFetch'
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
