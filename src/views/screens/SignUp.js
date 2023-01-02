import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import COLORS from '../../consts/colors';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  return (
    <>
      <View style={styles.AppContainer}>
        <View style={styles.Container}>
          <Image
            style={{
              alignSelf: 'center',
              height: 160,
              width: 160,
              marginBottom: 40,
            }}
            //  source={require('../Assets/gymnasticLogo.png')}
            resizeMode={'center'}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="UserName"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Password"
            secureTextEntry
            //    right={<TextInput.Icon icon={require('../Assets/eye.png')} />}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Confrim Password"
            secureTextEntry
            //     right={<TextInput.Icon icon={require('../Assets/eye.png')} />}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="elevated"
              buttonColor={COLORS.primary}
              labelStyle={styles.LoginText}
              style={styles.Buttons}
              onPress={() => navigation.navigate('LoginNavigation')}>
              {' '}
              Login
            </Button>

            <Button
              mode="outlined"
              style={styles.Buttons}
              labelStyle={styles.SignUpText}
              onPress={() => navigation.navigate('SignUpNavigation')}>
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Container: {
    flex: 1,
    margin: 50,
  },
  gymLogo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: '#423bc4',
    borderRadius: 100,
    marginBottom: 50,
  },
  appleLogo: {
    height: 22,
    width: 22,
  },
  InputFields: {
    marginVertical: 5,
  },
  LoginButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#423bc4',
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButtonApple: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#423bc4',
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#ffffff',
    fontFamily: 'Gill Sans',
    fontSize: 20,
    fontWeight: '700',
  },
  Sperator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Line: {
    height: 2,
    backgroundColor: 'black',
    width: '40%',
  },
  LineText: {
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 5,
  },
  Buttons: {
    borderRadius: 30,
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    borderWidth: 2,
    borderColor: '#855ef3',
    marginLeft: 20,
  },
  LoginText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: '#000',
  },
  SignUpText: {
    color: '#855ef3',
    fontSize: 18,
  },
});
