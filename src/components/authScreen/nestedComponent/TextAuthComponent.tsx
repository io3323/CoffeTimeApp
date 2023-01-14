import {StyleSheet, Text, View} from 'react-native';
import {ru} from '../../../localisationLanguageName';
import {
  addirinalAuthTextENG,
  addirinalAuthTextRU,
} from '../../../localisationScreen/AuthScreenLocal';
import {WIDTH_APP} from '../../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const TextAuthComponent = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  return (
    <View>
      <View style={styles.textConteinerMain}>
        <Text style={styles.mainText} adjustsFontSizeToFit={true}>
          CoffeTime
        </Text>
      </View>
      <View style={styles.additinalTextConteiner}>
        <Text style={styles.additinalText}>
          {localisationState.local == ru
            ? addirinalAuthTextRU
            : addirinalAuthTextENG}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textConteinerMain: {
    marginTop: '15.1%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Lobster-Regular',
  },
  additinalTextConteiner: {
    marginTop: -10,
    width: WIDTH_APP * 0.8,
    alignItems: 'flex-end',
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Bold',
  },
});
