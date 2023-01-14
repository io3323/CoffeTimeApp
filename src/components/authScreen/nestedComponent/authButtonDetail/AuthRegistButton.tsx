import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  buttonRegistTitleENG,
  buttonRegistTitleRu,
} from '../../../../localisationScreen/AuthScreenLocal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RegistScreenName} from '../../../../navigation/navigator/nameScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';

export const AuthRegistButton = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleRegistScreen = () => {
    navigation.navigate(RegistScreenName);
  };
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  return (
    <TouchableOpacity onPress={() => handleRegistScreen()}>
      <Text style={styles.buttonRegistText}>
        {localisationState.local == ru
          ? buttonRegistTitleRu
          : buttonRegistTitleENG}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonRegistText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SFUIText-Regular',
    marginTop: 5,
  },
});
