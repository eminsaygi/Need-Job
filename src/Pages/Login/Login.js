import React from 'react';
import {SafeAreaView, Image, View, Alert} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import Styles from './Login.style';

import Config from 'react-native-config';

import usePost from '../../Hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin() {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Error', 'Bir Hata oldu');
  }
  if (data.status === 'Error') {
    Alert.alert('Error', 'Kullanıcı Bulunamadı');
  } else {
    navigation.navigate('JobsPage');
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          style={Styles.logo}
          source={require('../../Assets/login.png')}
        />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          handleLogin();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={Styles.formContainer}>
            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Email</Text>
              <TextInput
                style={Styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Password</Text>
              <TextInput
                style={Styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <Button title="Login" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
