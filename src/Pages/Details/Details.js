import React from 'react';
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  Linking,
} from 'react-native';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import {useDispatch} from 'react-redux';

import {addFavorite} from '../../Context/favoritesSlice'

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import PageButton from '../../Components/Buttons';

import useFetch from '../../Hooks/useFetch';

import Styles from './Details.style';

const Header = ({job}) => {
  function DateTime() {
    var old = new Date(job.publication_date);
    var oldYear = old.getFullYear();
    var oldMont = old.getMonth();
    var oldDay = old.getDay();
    var oldDate = oldYear * 360 + oldMont * 30 + oldDay;

    var today = new Date();
    var newYear = today.getFullYear();
    var newMont = today.getMonth();
    var newDay = today.getDay();
    var newDate = newYear * 360 + newMont * 30 + newDay;

    return newDate - oldDate;
  }

  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.title}>{job.name}</Text>
      <Text style={Styles.locations}>
        <TextColor text="Location :" />
        {job.locations && job.locations.length > 0
          ? job.locations[0].name
          : 'No information'}
      </Text>
      <Text style={Styles.levels}>
        <TextColor text="Job Level :" />
        {job.levels && job.levels.length > 0
          ? job.levels[0].name
          : 'No information'}
      </Text>
      <Text style={Styles.levels}>
        <TextColor text="Job Company :" />
        {job.company.name}
      </Text>
      <Text style={Styles.levels}>
        <TextColor text="Publication Date : " />
        {job.publication_date.substr(0, 10)}
      </Text>
      <Text style={Styles.header}>Job Detail</Text>
    </View>
  );
};

const Buttons = ({onPress, onSubmit}) => {
  return (
    <View style={Styles.buttons}>
      <PageButton onPress={onSubmit} icon="login" text="Submit" />
      <PageButton onPress={onPress} icon="heart" text="Favorite Job" />
    </View>
  );
};

const TextColor = ({text}) => {
  return <Text style={Styles.text}>{text}</Text>;
};

const Details = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(`${Config.JOBS_API_URL}/${id}`);
  const {width} = Dimensions.get('window');
  const dispatch = useDispatch();

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const source = {
    html: data.contents,
  };

  const addFavoriteList = job => {
    dispatch(addFavorite(job));
  };

  const handleSubmit = item => {
    Linking.openURL(item.refs.landing_page);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header job={data} />
      <ScrollView style={Styles.html} showsVerticalScrollIndicator={false}>
        <RenderHTML source={source} contentWidth={width} />
      </ScrollView>
      <Buttons
        onSubmit={() => handleSubmit(data)}
        onPress={() => addFavoriteList(data)}
      />
    </SafeAreaView>
  );
};

export default Details;
