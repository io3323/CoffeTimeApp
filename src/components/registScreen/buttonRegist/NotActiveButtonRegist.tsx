import {StyleSheet, Text, View} from 'react-native';
import {ru} from '../../../localisationLanguageName';
import {
  buttonRegistENG,
  buttonRegistRU,
} from '../../../localisationScreen/RegistScreenLocal';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const NotActiveButtonRegist = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  return (
    <View style={styles.buttonLoginNoActive}>
      <Text style={styles.buttonTextLogin}>
        {localisationState.local == ru ? buttonRegistRU : buttonRegistENG}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLoginNoActive: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#bdbbbb',
    borderColor: '#bdbbbb',
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
