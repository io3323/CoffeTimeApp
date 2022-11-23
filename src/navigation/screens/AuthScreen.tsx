//import {useNavigation} from '@react-navigation/native';

// @ts-ignore
import imaga from '../../assets/image/authscreen/fon.png';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginForm from '../../components/LoginForm';
import { useState } from "react";

export const AuthScreenName = 'Auth Screen';
export const AuthScreen = () => {
  return (
    <ImageBackground style={styles.viewContainer} source={imaga}>
      <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
        <View style={styles.viewStyle}>
          <SafeAreaView>
            <Text style={styles.mainText}>CoffeTime</Text>
            <Text style={styles.additinalText}>территория кофе</Text>
            <LoginForm />
          </SafeAreaView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  mainText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
    marginTop: 101,
    marginLeft: 70,
    marginRight: 13,
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
    marginLeft: 159,
    marginRight: 83,
  },
  viewStyle: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
