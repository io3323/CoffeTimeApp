import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {HEIGHT_APP} from '../../../../../definitionSize';

export const DescriptionTextDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const {t} = useTranslation();
  return (
    <View style={styles.textDescriptionConteiner}>
      <Text
        style={
          themeState.theme == light
            ? styles.textDescriptionLight
            : styles.textDescriptionDark
        }>
        {infoProductCoffeState.productName} –{' '}
        {t('common:detailProductScreen:descriptionProduct')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textDescriptionConteiner: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '94%',
    height: HEIGHT_APP * 0.2,
  },
  textDescriptionLight: {
    color: '#474747',
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
  textDescriptionDark: {
    color: 'white',
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
});
