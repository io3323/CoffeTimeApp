import {StyleSheet, Text, View} from 'react-native';
import {WIDTH_APP} from '../../../definitionSize';
import {useTranslation} from 'react-i18next';

export const AdditionalTextRegist = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.additinalTextConteiner}>
      <Text style={styles.additinalText}>
        {t('common:registScreen:additionalText')}
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
    fontFamily: 'SFUIText-Bold',
  },
});
