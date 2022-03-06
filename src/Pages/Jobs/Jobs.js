import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Config from '.react-native-config';

import Error from '../../Assets/Animations/error.json';
import JobCard from '../../Components/JobCard';
import PageButton from '../../Components/Buttons';
import useFetch from '../../Hooks/useFetch';

import Styles from './Jobs.style';
import Loading from '../../Components/Loading';
const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {data, error, loading} = useFetch(`${Config.API_URL}?page=${page}`);
  // https://www.themuse.com/api/public/jobs?page=1

  useEffect(() => {
    page;
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
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
