import {View, StyleSheet} from 'react-native';
import {LoginInputDetail} from './authFormComponentDetail/LoginInputDetail';
import {PasswordInputDetail} from './authFormComponentDetail/PasswordInputDetail';
import {AuthButtonActive} from './authButtonDetail/AuthButtonActive';
import {AuthButtonNotActive} from './authButtonDetail/AuthButtonNotActive';
import {AuthRegistButton} from './authButtonDetail/AuthRegistButton';
import {AuthButtonActivityIndicator} from './authButtonDetail/AuthButtonActivityIndicator';
const LoginForm = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <LoginInputDetail />
      </View>
      <View>
        <PasswordInputDetail />
      </View>
      <View style={[styles.buttonConteiner]}>
        <AuthButtonActive />
        <AuthButtonNotActive />
        <AuthButtonActivityIndicator />
      </View>
      <View style={styles.registConteiner}>
        <AuthRegistButton />
      </View>
    </View>
  );
};
export default LoginForm;
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '25%',
    height: 230,
  },
  buttonConteiner: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  registConteiner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
