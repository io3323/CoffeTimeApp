import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RegistScreenName} from '../../../../navigation/navigator/nameScreen';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';

export const AuthRegistButton = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleRegistScreen = () => {
    navigation.navigate(RegistScreenName);
  };
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={() => handleRegistScreen()}>
      <Text style={styles.buttonRegistText}>
        {t('common:authScreen:registButton')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonRegistText: {
    fontSize: 14,
    color: Color.authColorObject.buttonReg.textColor,
    fontFamily: 'SFUIText-Regular',
    marginTop: 5,
  },
});
