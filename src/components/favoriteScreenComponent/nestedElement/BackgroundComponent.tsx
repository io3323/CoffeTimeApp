import {Image, StyleSheet, Text, View} from 'react-native';
import imageNoCoffeeLight from '../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeeDark from '../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../Color';

const {color, colorText} = Color.favoriteColorObject.backgroundComponent;
export const BackgroundComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <View
      style={[
        styles.mainContainer,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}>
      <View style={styles.nestedContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={
              themeState.theme == light
                ? styles.imageNoCoffeeLight
                : styles.imageNoCoffeeDark
            }
            source={
              themeState.theme == light ? imageNoCoffeeLight : imageNoCoffeeDark
            }
          />
        </View>
        <View style={styles.textContainer}>
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
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nestedContainer: {
    marginTop: '-40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: '16.5%',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLight: {
    backgroundColor: color.light,
  },
  colorDark: {
    backgroundColor: color.dark,
  },
  imageNoCoffeeDark: {
    width: 150,
    height: 150,
  },
  imageNoCoffeeLight: {
    width: 150,
    height: 150,
  },
  textLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: colorText.light,
  },
  textDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: colorText.dark,
    marginTop: 10,
  },
});
