import {StyleSheet, Text, View} from 'react-native';
import {WIDTH_APP} from '../../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../Color';
export const TextAuthComponent = () => {
  useSelector((state: RootState) => state.localisationState);
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.textContainerMain}>
        <Text style={styles.mainText} adjustsFontSizeToFit={true}>
          QFPN
        </Text>
      </View>
      {/* <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalText}>
          {t('common:authScreen:additionalText')}
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainerMain: {
    marginTop: '15.1%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 64,
    color: Color.authColorObject.mainText.color,
    fontFamily: 'Lobster-Regular',
  },
  additionalTextContainer: {
    marginTop: -10,
    width: WIDTH_APP * 0.8,
    alignItems: 'flex-end',
  },
  additionalText: {
    fontSize: 16,
    color: Color.authColorObject.mainText.additionalText,
    fontFamily: 'SFUIText-Bold',
  },
});
