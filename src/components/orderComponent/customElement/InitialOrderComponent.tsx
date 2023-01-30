import {Image, StyleSheet, Text, View} from 'react-native';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import {light} from '../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const InitialOrderComponent = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.mainInitialConteiner}>
      <Image source={imageNoCoffe} style={styles.imageNoCoffe} />
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
  mainInitialConteiner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginVertical: 160,
  },
  initialView: {marginTop: 80},
  imageNoCoffe: {
    width: 160,
    height: 160,
  },
  textInitialPageLight: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: '#474747',
  },
  textInitialPageDark: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: 'white',
  },
});
