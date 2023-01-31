import {Image, StyleSheet, Text, View} from 'react-native';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import {light} from '../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {Color} from '../../../Color';

const {textColor} = Color.orderColorObject.initialOrderComponent;
export const InitialOrderComponent = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.mainInitialContainer}>
      <Image source={imageNoCoffe} style={styles.imageNoCoffee} />
      <View style={styles.initialView}>
        <Text
          style={
            themeState.theme == light
              ? styles.textInitialPageLight
              : styles.textInitialPageDark
          }>
          {t('common:orderScreen:initialLabelUp')}
        </Text>
        <Text
          style={
            themeState.theme == light
              ? styles.textInitialPageLight
              : styles.textInitialPageDark
          }>
          {t('common:orderScreen:initialLabelDawn')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainInitialContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginVertical: 160,
  },
  initialView: {marginTop: 80},
  imageNoCoffee: {
    width: 160,
    height: 160,
  },
  textInitialPageLight: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: textColor.light,
  },
  textInitialPageDark: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: textColor.dark,
  },
});
