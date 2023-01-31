import {light} from '../../../../themeNameApp';
import cafeIcon from '../../../../assets/image/listScreen/cafeIcon.png';
import cafeIconDark from '../../../../assets/image/listScreen/cafeIconDark.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  linerGradientColorsDark,
  linerGradientColorsLight,
} from '../DetailComponentColor';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {TextBlockImageDC} from './TextBlockImageDC';
import {SwitchImageDC} from './SwitchImageDC';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {FC} from 'react';
import {Color} from '../../../../Color';
type ImageNFDetailComponent = {
  name: string;
  address: string;
};
export const ImageNFDetailComponent: FC<ImageNFDetailComponent> = ({
  name,
  address,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {linerGradient} = Color.detailColorObject.cardProductComponent;
  return (
    <ImageBackground
      style={styles.image}
      source={themeState.theme == light ? cafeIcon : cafeIconDark}>
      <LinearGradient
        colors={
          themeState.theme == light ? linerGradient.light : linerGradient.dark
        }
        style={styles.linearGradient}>
        <View style={styles.container}>
          <TextBlockImageDC name={name} address={address} />
          <SwitchImageDC />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
