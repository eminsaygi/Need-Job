import PageButton from '../Buttons';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import Styles from './JobCard.style';

const CardText = ({style, text}) => {
  return <Text style={style}>{text}</Text>;
};



const JobCard = ({job, onSelect, isButton, onRemove}) => {
  var old = new Date(job.publication_date)

  var year= old.getFullYear()
  var mont = old.getMonth()
  var  day = old.getDay()
  var oldDate = (year*360+mont*30+day)
  var today = new Date();
// today.setDate(today.getDate()- 5)
  
  //console.log(today + "  --  " +diff) 

  console.log(year + " -- " + mont + " -- " + day)
  console.log(oldDate)


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
