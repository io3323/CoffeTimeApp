import {StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

export const TextBlockButtonDetailElement = () => {
  const {t} = useTranslation();
  return (
    <Text style={styles.textBlock}>
      {t('common:detailProductScreen:button')}
    </Text>
  );
};

const styles = StyleSheet.create({
  textBlock: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
    fontFamily: 'SFUIText-Regular',
  },
});
