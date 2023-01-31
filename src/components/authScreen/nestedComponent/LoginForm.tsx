import {View, StyleSheet} from 'react-native';
import {LoginInputDetail} from './authFormComponentDetail/LoginInputDetail';
import {PasswordInputDetail} from './authFormComponentDetail/PasswordInputDetail';
import {AuthButtonActive} from './authButtonDetail/AuthButtonActive';
import {AuthButtonNotActive} from './authButtonDetail/AuthButtonNotActive';
import {AuthRegistButton} from './authButtonDetail/AuthRegistButton';
import {AuthButtonActivityIndicator} from './authButtonDetail/AuthButtonActivityIndicator';
import {HEIGHT_APP} from '../../../definitionSize';
const LoginForm = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <LoginInputDetail />
      </View>
      <View>
        <PasswordInputDetail />
      </View>
      <View style={[styles.buttonContainer]}>
        <AuthButtonActive />
        <AuthButtonNotActive />
        <AuthButtonActivityIndicator />
      </View>
      <View style={styles.regContainer}>
        <AuthRegistButton />
      </View>
    </View>
  );
};
export default LoginForm;
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '25%',
    height: HEIGHT_APP,
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
  regContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
