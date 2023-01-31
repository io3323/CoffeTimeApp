import {light} from '../../../../themeNameApp';
import imageNoCoffee from '../../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeeDark from '../../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
type ImageCardProductType = {
  imagesPath: string;
};
export const ImageCardProductComponent: FC<ImageCardProductType> = ({
  imagesPath,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <ImageBackground
      style={themeState.theme == light ? styles.imageLight : styles.imageDark}
      source={themeState.theme == light ? imageNoCoffee : imageNoCoffeeDark}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imagesPath}} style={styles.imageLight} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLight: {
    width: 150,
    height: 135,
  },
  imageDark: {
    width: 130,
    height: 130,
  },
});
