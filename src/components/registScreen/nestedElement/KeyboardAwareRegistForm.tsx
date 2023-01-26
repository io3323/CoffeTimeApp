import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../RegisterForm';
import {StyleSheet} from 'react-native';
import {KeyboardCheck} from '../../generalComponent/KeyboardCheck';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const KeyboardAwareRegistForm = () => {
  const keyboardStatusState = useSelector(
    (state: RootState) => state.keyboardStatusState,
  );
  return (
    <KeyboardCheck>
      <KeyboardAwareScrollView
        extraHeight={150}
        extraScrollHeight={125}
        enableOnAndroid={true}
        scrollEnabled={keyboardStatusState.keyboardStatus}
        style={styles.keyboardContainer}>
        <RegisterForm />
      </KeyboardAwareScrollView>
    </KeyboardCheck>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    height: '80%',
  },
});
