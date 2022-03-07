import PageButton from '../Buttons';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import Styles from './JobCard.style';

const CardText = ({style, text}) => {
  return <Text style={style}>{text}</Text>;
};

const JobCard = ({job, onSelect, isButton, onRemove}) => {
  return (
    <Pressable style={Styles.container} onPress={onSelect}>
      <CardText style={Styles.title} text={job.name} />
      <CardText style={Styles.text} text={job.company.name} />
      <View style={Styles.locationContainer}>
        <CardText
          style={Styles.location}
          text={
            job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'No information'
          }
        />
      </View>
      <View style={Styles.footerView}>
        <CardText style={Styles.time} text={(job.publication_date).substr(0,10)} />
        <CardText
          style={Styles.level}
          text={
            job.levels && job.levels.length > 0
              ? job.levels[0].name
              : 'No information'
          }></CardText>
      </View>

      {isButton ? <PageButton text="Remove" onPress={onRemove} /> : null}
    </Pressable>
  );
};

export default JobCard;
