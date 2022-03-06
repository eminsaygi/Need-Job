import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <LottieView source={require('../../Assets/Animations/error.json')} autoPlay />
  );
};

export default Error;
