import {StyleSheet, View} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduToolKitQuery';
import {FotoPickerElement} from './fotoPickerElement/FotoPickerElement';
import {ActiveButtonRegist} from './buttonRegist/ActiveButtonRegist';
import {NotActiveButtonRegist} from './buttonRegist/NotActiveButtonRegist';
import {IndicatorButtonRegist} from './buttonRegist/IndicatorButtonRegist';
import {InputNameFormRegist} from './inputFormRegist/InputNameFormRegist';
import {InputEmailFormRegist} from './inputFormRegist/InputEmailFormRegist';
import {InputPasswordFormRegist} from './inputFormRegist/InputPasswordFormRegist';
import {changeButtonControllerState} from '../../redux/reduxStateSlice/userInfoSlice';
import {LineRegistElement} from './nestedElement/LineRegistElement';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
  );
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  useEffect(() => {
    dispatch(changeButtonControllerState());
  }, [userInfoState.userInfo]);
  return (
    <View style={styles.mainConteiner}>
      <FotoPickerElement />
      <InputNameFormRegist />
      <LineRegistElement />
      <InputEmailFormRegist />
      <LineRegistElement />
      <InputPasswordFormRegist />
      <LineRegistElement />
      {!indicatorButtonState.active && (
        <View>
          {userInfoState.buttonController && <ActiveButtonRegist />}
          {!userInfoState.buttonController && <NotActiveButtonRegist />}
        </View>
      )}
      {indicatorButtonState.active && <IndicatorButtonRegist />}
    </View>
  );
};
const styles = StyleSheet.create({
  mainConteiner: {
    alignItems: 'center',
    height: 500,
  },
});
export default RegisterForm;
