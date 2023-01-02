import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Switch} from 'react-native-switch';
import {FunctionComponent, useState} from 'react';

import cafeIcon from '../../../assets/image/listScreen/cafeIcon.png';
import cafeIconDark from '../../../assets/image/listScreen/cafeIconDark.png';
import {
  backgroundActiveDark,
  backgroundActiveLight,
  linerGradientColorsDark,
  linerGradientColorsLight,
  thumbColorDark,
  thumbColorLight,
} from './DetailComponentColor';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {HeartComponent} from './HeartComponent';
import {EmptyComponent} from './EmptyComponent';
type ImageComponentType = {
  images: string;
  name: string;
  address: string;
};
export const ImageDetailComponent: FunctionComponent<ImageComponentType> = ({
  images,
  name,
  address,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [controller, setController] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainConteiner}>
      {controller && (
        <ImageBackground
          style={styles.image}
          source={{uri: images}}
          onError={() => setController(false)}>
          <LinearGradient
            colors={
              themeState.theme == light
                ? linerGradientColorsLight
                : linerGradientColorsDark
            }
            style={styles.linearGradient}>
            <View style={styles.conteiner}>
              <View style={styles.mainBlockConteiner}>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textNameLight
                      : styles.textNameDark
                  }>
                  {name}
                </Text>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textAdressLight
                      : styles.textAdressDark
                  }>
                  {address}
                </Text>
              </View>
              <View style={styles.switchController}>
                <Switch
                  backgroundActive={
                    themeState.theme == light
                      ? backgroundActiveLight
                      : backgroundActiveDark
                  }
                  backgroundInactive={'#f3f1f1'}
                  circleActiveColor={'#f4f3f4'}
                  circleInActiveColor={
                    themeState.theme == light ? thumbColorLight : thumbColorDark
                  }
                  renderInsideCircle={() =>
                    isEnabled ? <HeartComponent /> : <EmptyComponent />
                  }
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  circleSize={30}
                  switchLeftPx={2.4}
                  switchRightPx={2.4}
                  activeText={''}
                  inActiveText={''}
                  circleBorderActiveColor={'white'}
                  circleBorderInactiveColor={
                    themeState.theme == light ? thumbColorLight : thumbColorDark
                  }
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
      {controller == false && (
        <ImageBackground
          style={styles.image}
          source={themeState.theme == light ? cafeIcon : cafeIconDark}>
          <LinearGradient
            colors={
              themeState.theme == light
                ? linerGradientColorsLight
                : linerGradientColorsDark
            }
            style={styles.linearGradient}>
            <View style={styles.conteiner}>
              <View style={styles.mainBlockConteiner}>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textNameLight
                      : styles.textNameDark
                  }>
                  {name}
                </Text>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textAdressLight
                      : styles.textAdressDark
                  }
                  numberOfLines={0}>
                  {address}
                </Text>
              </View>
              <View style={styles.switchController}>
                <Switch
                  backgroundActive={
                    themeState.theme == light
                      ? backgroundActiveLight
                      : backgroundActiveDark
                  }
                  backgroundInactive={'#f3f1f1'}
                  circleActiveColor={'#f4f3f4'}
                  circleInActiveColor={
                    themeState.theme == light ? thumbColorLight : thumbColorDark
                  }
                  renderInsideCircle={() =>
                    isEnabled ? <HeartComponent /> : <EmptyComponent />
                  }
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  circleSize={30}
                  switchLeftPx={2.4}
                  switchRightPx={2.4}
                  activeText={''}
                  inActiveText={''}
                  circleBorderActiveColor={'white'}
                  circleBorderInactiveColor={
                    themeState.theme == light ? thumbColorLight : thumbColorDark
                  }
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: 320,
  },
  mainBlockConteiner: {
    width: '85%',
  },
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
  textNameLight: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color: '#474747',
    marginTop: 220,
    marginLeft: 6,
  },
  textNameDark: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color: 'white',
    marginTop: 220,
    marginLeft: 6,
  },
  textAdressLight: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    color: '#717171',
    marginLeft: 6,
    marginTop: 10,
    height: 100,
  },
  textAdressDark: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    color: 'white',
    marginLeft: 6,
    marginTop: 10,
    height: 100,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  switchController: {
    marginLeft: -5,
    marginBottom: 50,
  },
  headrIcon: {
    width: 20,
    height: 18,
    backgroundColor: 'red',
    marginLeft: -50,
    marginBottom: 100,
  },
});
