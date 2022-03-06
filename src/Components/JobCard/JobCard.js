import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './JobCard.style';
import PageButton from '../../Components/Buttons';

const JobCard = ({job, onSelect, isButton, onRemove}) => {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <CardText style={styles.title} text={job.name}></CardText>
      <CardText style={styles.text} text="Sprinklr"></CardText>
      <View style={styles.locationContainer}>
        <CardText
          style={styles.location}
          text={
            job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'No İnofrmations'
          }></CardText>
      </View>
    </Pressable>
  );
};
export default JobCard;
