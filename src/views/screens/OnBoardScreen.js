import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Button} from 'react-native-paper';
import COLORS from '../../consts/colors';
const Welcome = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <Image
          source={require('../../assets/LoginImage/onboardImage.png')}
          resizeMode={'center'}
          style={{height:360}}
      />
      <Text style={styles.WelcomeText}>Welcome to Foodies Kitchen</Text>

      <View style={styles.buttonContainer}>
        <Button mode='elevated'  buttonColor={COLORS.primary} labelStyle={styles.LoginText} style={styles.Buttons}  onPress={() => navigation.navigate('LoginNavigation')} > Login</Button>

        <Button mode='outlined'   style={styles.Buttons} labelStyle={styles.SignUpText} onPress={() => navigation.navigate('SignUpNavigation')} >Sign Up</Button>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={{color: 'black'}}>Or via social media</Text>
      </View>
      <View style={styles.SocialIcons}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../../assets/LoginImage/Facebook.png')}
        />
        <Image
          style={{height: 50, width: 50}}
           source={require('../../assets/LoginImage/Twitter.png')}
        />
        <Image
          style={{height: 50, width: 50}}
          source={require('../../assets/LoginImage/Gmail.png')}
        />
      </View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  WelcomeText: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: '800',
    color: '#000',
    fontFamily: 'roboto',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: '#000',
    
  },

  buttonsText: {
    fontSize: 18,
    color: '#fff',
  },
  Buttons: {
    margin: 10,
    borderRadius: 50,
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:COLORS.primary,
    borderWidth: 2,
  },
 
  LoginText: {
    color: '#fff',
    fontSize: 20,
  },
  SignUpText: {
    color: COLORS.primary,
    fontSize: 18,
    
  },
  SocialIcons: {
    height: '15%',
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
