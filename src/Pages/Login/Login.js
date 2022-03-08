import React from 'react';
import {SafeAreaView, Image, View, Alert} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';
import Input from '../../Components/Input';
import Button from './'

import Config from 'react-native-config';
import usePost from '../../Hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin() {
    post(Config.API_AUTH_URL + '/login', values);
    console.error(Config.API_AUTH_URL + '/login');
  }

  if (error) {
    Alert.alert('Error', 'Bir Hata oldu');
  } else {
    navigation.navigate('JobsPage');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../Assets/login.png')}></Image>
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adı giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconname="account"></Input>
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconname="key"
              ></Input>
            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
              loading={loading}></Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
