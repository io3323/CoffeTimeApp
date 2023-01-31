import LinearGradient from 'react-native-linear-gradient';
import {light} from '../../../../themeNameApp';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {TextBlockImageDC} from './TextBlockImageDC';
import {SwitchImageDC} from './SwitchImageDC';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {Color} from '../../../../Color';
type ImageFDetailComponent = {
  name: string;
  address: string;
  images: string;
  controlImageFunc?: (result: boolean) => void;
};
export const ImageFDetailComponent: FC<ImageFDetailComponent> = ({
  name,
  address,
  images,
  controlImageFunc,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {linerGradient} = Color.detailColorObject.cardProductComponent;
  return (
    <ImageBackground
      style={styles.image}
      source={{uri: images}}
      onError={() => controlImageFunc?.(false)}>
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
