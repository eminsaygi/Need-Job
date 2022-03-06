import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './PageButton.style';
const PageButton = ({text, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {' '}
      <MaterialCommunityIcons
        style={styles.icon}
        name={icon}
        size={25}
        color="#fff"></MaterialCommunityIcons>
    </TouchableOpacity>
  );
};

export default PageButton;
