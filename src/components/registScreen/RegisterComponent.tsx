import imaga from '../../assets/image/authScreen/fon.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {HEIGHT_APP} from '../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import {light} from '../../themeNameApp';
import {
  linerGradientColorsDark,
  linerGradientColorsLight,
} from '../detailComponent/nestedComponent/DetailComponentColor';
import {BackButtonRegist} from './nestedElement/BackButtonRegist';
import {MainTextRegist} from './nestedElement/MainTextRegist';
import {AdditionalTextRegist} from './nestedElement/AdditionalTextRegist';
import {KeyboardAwareRegistForm} from './nestedElement/KeyboardAwareRegistForm';
export const RegisterComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const [scrollController, setScrollController] = useState(false);
  useEffect(() => {
    if (HEIGHT_APP > 640) {
      setScrollController(false);
    } else if (HEIGHT_APP <= 640) {
      setScrollController(true);
    }
  }, []);
  return (
    <ImageBackground style={styles.viewContainer} source={imaga}>
      <LinearGradient
        colors={
          themeState.theme == light
            ? linerGradientColorsLight
            : linerGradientColorsDark
        }>
        <View style={styles.viewStyle}>
          <SafeAreaView>
            <ScrollView
              showsVerticalScrollIndicator={false}
              scrollEnabled={scrollController}>
              <BackButtonRegist />
              <MainTextRegist />
              <AdditionalTextRegist />
              <KeyboardAwareRegistForm />
            </ScrollView>
          </SafeAreaView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  viewStyle: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
