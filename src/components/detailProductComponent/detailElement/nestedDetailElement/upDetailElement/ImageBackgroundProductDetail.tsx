import {light} from '../../../../../themeNameApp';
import imageNoCoffe from '../../../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeDark from '../../../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const ImageBackgroundProductDetail = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  return (
    <ImageBackground
      source={themeState.theme == light ? imageNoCoffe : imageNoCoffeDark}
      style={themeState.theme == light ? styles.imageLight : styles.imageDark}
      imageStyle={styles.imageBackStyle}>
      <Image
        source={{uri: infoProductCoffeState.imagesPath}}
        style={styles.image}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageLight: {
    width: '55%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackStyle: {
    width: '100%',
    height: '100%',
  },
  imageDark: {
    width: '55%',
    height: '73%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
