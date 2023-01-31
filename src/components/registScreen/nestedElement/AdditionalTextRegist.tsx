import {StyleSheet, Text, View} from 'react-native';
import {WIDTH_APP} from '../../../definitionSize';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../Color';

const {color} = Color.regComponent.additionalText;
export const AdditionalTextRegist = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.additionalTextConteiner}>
      <Text style={styles.additionalText}>
        {t('common:registScreen:additionalText')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  additionalTextConteiner: {
    marginTop: -10,
    width: WIDTH_APP * 0.8,
    alignItems: 'flex-end',
  },
  additionalText: {
    fontSize: 16,
    color: color,
    fontFamily: 'SFUIText-Bold',
  },
});
