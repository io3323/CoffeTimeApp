import {Image, StyleSheet, View} from 'react-native';
import listIcon from '../../../assets/image/mainScreen/segmentControlIcon/listIcon.png';
import listIconDark from '../../../assets/image/mainScreen/listIconBarDark.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
export const CustomListIcon = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light ? styles.conteinerLight : styles.conteinerDark
      }>
      <Image
        source={themeState.theme == light ? listIcon : listIconDark}
        style={themeState.theme == light ? styles.listLight : styles.listDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listLight: {
    width: 45,
    height: 20,
  },
  listDark: {
    width: 35,
    height: 25,
  },
  conteinerLight: {
    marginTop: 6,
    marginRight: 11,
  },
  conteinerDark: {
    marginTop: 2.5,
    marginRight: 15,
  },
});
