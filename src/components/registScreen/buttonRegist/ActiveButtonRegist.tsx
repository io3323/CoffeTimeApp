import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {changeButtonIndicatorState} from '../../../redux/reduxStateSlice/indicatorButtonSlice';
import {addToken} from '../../../redux/reduxStateSlice/tokenSlice';
import {
  checkFunction,
  ERORNet,
  GOODRes,
  MistakeUser,
} from '../../../externalFunctions/authScreen/checkFunction';
import {LoaderScreenName} from '../../../navigation/navigator/nameScreen';
import {RootState, useAddLoginMutation} from '../../../redux/reduToolKitQuery';
import {useDispatch, useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {light} from '../../../themeNameApp';
import {buttonRegistObjectColor} from './buttonRegistObjectColor';
import {useTranslation} from 'react-i18next';

export const ActiveButtonRegist = () => {
  const [addLogin] = useAddLoginMutation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleRegistScreen = async () => {
    dispatch(changeButtonIndicatorState({active: true}));
    const result = await addLogin({
      email: 'string',
      password: 'string',
    });
    dispatch(addToken(result));
    const checkResult = checkFunction(result);
    if (checkResult === GOODRes) {
      navigation.navigate(LoaderScreenName);
    } else if (checkResult === MistakeUser) {
      dispatch(changeButtonIndicatorState({active: false}));
    } else if (checkResult === ERORNet) {
      dispatch(changeButtonIndicatorState({active: false}));
    }
  };
  const {t} = useTranslation();
  const handleTransitionMainScreen = () => {
    handleRegistScreen();
  };
  return (
    <TouchableOpacity
      style={[
        styles.buttonLogin,
        {
          backgroundColor:
            themeState.theme == light
              ? buttonRegistObjectColor.backgroundColorLight
              : buttonRegistObjectColor.backgroundColorDark,
          borderColor:
            themeState.theme == light
              ? buttonRegistObjectColor.borderColorLight
              : buttonRegistObjectColor.borderColorDark,
        },
      ]}
      onPress={() => handleTransitionMainScreen()}>
      <Text style={styles.buttonTextLogin}>
        {t('common:registScreen:button')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
});
