import {StyleSheet, Text, View} from 'react-native';
import {ru} from '../../../localisationLanguageName';
import {
  addirinalRegistTextENG,
  addirinalRegistTextRU,
} from '../../../localisationScreen/RegistScreenLocal';
import {WIDTH_APP} from '../../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const AdditionalTextRegist = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  return (
    <View style={styles.additinalTextConteiner}>
      <Text style={styles.additinalText}>
        {localisationState.local == ru
          ? addirinalRegistTextRU
          : addirinalRegistTextENG}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  additinalTextConteiner: {
    marginTop: -10,
    width: WIDTH_APP * 0.8,
    alignItems: 'flex-end',
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
});
