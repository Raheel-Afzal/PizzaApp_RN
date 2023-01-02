import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import COLORS from '../../consts/colors';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  return (
    <>
      <View style={styles.AppContainer}>
        <View style={styles.Container}>
          <View style={styles.TagLine}>
            <Text style={styles.TagLineText1}>Foodies</Text>
            <Text style={styles.TagLineText2}>Kitchen</Text>
          </View>

          <Image
            style={{
              alignSelf: 'center',
              height: 150,
              left: 100,
              top:20,
              marginBottom: 40,
            }}
            source={require('../../assets/LoginImage/onboard.png')}
            resizeMode={'center'}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Password"
            secureTextEntry
            right={
              <TextInput.Icon
                icon={require('../../assets/LoginImage/eye.png')}
              />
            }
          />
          <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Container: {
    flex: 1,
    margin: 50,
  },
  TagLine:{
      top:110
  },
  TagLineText1:{
      fontSize:50,
      fontWeight:"800",
  },
  TagLineText2:{
    lineHeight:50,
      fontSize:28,
      letterSpacing:7
  },
  InputFields: {
    marginVertical: 5,
  },
  LoginButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
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

 
});
