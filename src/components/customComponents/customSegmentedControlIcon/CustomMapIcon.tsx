import {Image, StyleSheet, View} from 'react-native';
import mapIcon from '../../../assets/image/mainScreen/segmentControlIcon/mapIcon.png';
import mapIconDark from '../../../assets/image/mainScreen/segmentControlIcon/mapIconDark.png';
import {light} from '../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
export const CustomMapIcon = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.conteiner}>
      <Image
        source={themeState.theme == light ? mapIcon : mapIconDark}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 15,
    height: 20,
  },
  conteiner: {
    marginTop: 6,
    marginLeft: 25,
  },
});
