import {light} from '../../../../../themeNameApp';
import rubleIcon from '../../../../../assets/image/detailScreen/rubleIcon.png';
import rubleDark from '../../../../../assets/image/detailScreen/rubleIconDark.png';
import {Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const RubleIconComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <Image
      source={themeState.theme == light ? rubleIcon : rubleDark}
      style={
        themeState.theme == light ? styles.rubleIconLight : styles.rubleIconDark
      }
    />
  );
};

const styles = StyleSheet.create({
  rubleIconLight: {
    width: 15,
    height: 23,
    marginLeft: -5,
    marginBottom: 5,
  },
  rubleIconDark: {
    width: 25,
    height: 30,
    marginLeft: -5,
  },
});
