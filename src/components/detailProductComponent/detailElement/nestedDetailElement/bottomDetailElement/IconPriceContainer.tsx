import {light} from '../../../../../themeNameApp';
import rubleGray from '../../../../../assets/image/detailProductScreen/rubleGray.png';
import rubleIconDark from '../../../../../assets/image/detailScreen/rubleIconDark.png';
import {Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const IconPriceContainer = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <Image
      source={themeState.theme == light ? rubleGray : rubleIconDark}
      style={
        themeState.theme == light
          ? styles.rubleGrayIconLight
          : styles.rubleGrayIconDark
      }
    />
  );
};

const styles = StyleSheet.create({
  rubleGrayIconLight: {
    marginTop: 5,
    width: 16,
    height: 24,
  },
  rubleGrayIconDark: {
    width: 20,
    height: 34,
  },
});
