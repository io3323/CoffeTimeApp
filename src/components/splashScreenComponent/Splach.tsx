import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenName} from '../../navigation/navigator/nameScreen';
import {Color} from '../../Color';

const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

const {color} = Color.splashColorObject;
export const Splash = () => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [state, setState] = useState<
    | typeof LOADING_IMAGE
    | typeof FADE_IN_IMAGE
    | typeof WAIT_FOR_APP_TO_BE_READY
    | typeof FADE_OUT
    | typeof HIDDEN
  >(LOADING_IMAGE);

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      setState(FADE_OUT);
      navigation.navigate(AuthScreenName);
    }
  }, [state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) {
    return null;
  }
  return (
    <Animated.View
      collapsable={false}
      style={[style.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={require('../../assets/image/splashScreen/splachScreen.png')}
        fadeDuration={0}
        onLoad={() => {
          setState(FADE_IN_IMAGE);
        }}
        style={[style.image, {opacity: imageOpacity}]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '125%',
    height: '125%',
  },
});
