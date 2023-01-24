import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../RegisterForm';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';

export const KeyboardAwareRegistForm = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });
  return (
    <View>
      <KeyboardAwareScrollView
        extraHeight={150}
        extraScrollHeight={125}
        enableOnAndroid={true}
        scrollEnabled={keyboardStatus}
        style={styles.keyboardConteiner}>
        <RegisterForm />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardConteiner: {
    height: '80%',
  },
});
