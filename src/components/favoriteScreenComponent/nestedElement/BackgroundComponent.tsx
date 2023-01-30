import {Image, StyleSheet, Text, View} from 'react-native';
import imageNoCoffeLight from '../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeDark from '../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {useTranslation} from 'react-i18next';
export const BackgroundComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <View
      style={[
        styles.mainConteiner,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}>
      <View style={styles.nestedConteiner}>
        <View style={styles.imageConteiner}>
          <Image
            style={
              themeState.theme == light
                ? styles.imageNoCoffeLight
                : styles.imageNoCoffeDark
            }
            source={
              themeState.theme == light ? imageNoCoffeLight : imageNoCoffeDark
            }
          />
        </View>
        <View style={styles.textConteiner}>
          <Text
            style={
              themeState.theme == light ? styles.textLight : styles.textDark
            }>
            {t('common:favoriteScreen:initialLabelUp')}
          </Text>
          <Text
            style={
              themeState.theme == light ? styles.textLight : styles.textDark
            }>
            {t('common:favoriteScreen:initialLabelDawn')}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nestedConteiner: {
    marginTop: '-40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageConteiner: {
    marginBottom: '16.5%',
  },
  textConteiner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLight: {
    backgroundColor: '#f2f2f2',
  },
  colorDark: {
    backgroundColor: '#534965',
  },
  imageNoCoffeDark: {
    width: 150,
    height: 150,
  },
  imageNoCoffeLight: {
    width: 150,
    height: 150,
  },
  textLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: '#717171',
  },
  textDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: 'white',
    marginTop: 10,
  },
});
