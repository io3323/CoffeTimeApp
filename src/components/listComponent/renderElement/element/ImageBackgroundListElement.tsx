import {light} from '../../../../themeNameApp';
import cafeIcon from '../../../../assets/image/listScreen/cafeIcon.png';
import cafeIconDark from '../../../../assets/image/listScreen/cafeIconDark.png';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {HEIGHT_APP, WIDTH_APP} from '../../../../definitionSize';
import {FC} from 'react';
type ImageListModel = {
  image: string;
};
export const ImageBackgroundListElement: FC<ImageListModel> = ({image}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <ImageBackground
      source={themeState.theme == light ? cafeIcon : cafeIconDark}
      imageStyle={styles.plugImage}>
      <Image source={{uri: image}} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WIDTH_APP * 0.35,
    height: HEIGHT_APP * 0.15,
    alignSelf: 'center',
  },
  plugImage: {
    width: WIDTH_APP * 0.35,
    height: HEIGHT_APP * 0.15,
    alignSelf: 'center',
  },
});
