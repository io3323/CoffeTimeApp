import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {light} from '../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {MapSeparatorElement} from './MapSeparatorElement';
import {Color} from '../../../Color';

const {blockMasColor, textMasColor} = Color.mapColorObject.mapInfoComponent;
export const MapInfoElement = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const rStyleText = useAnimatedStyle(() => {
    const textColor = interpolateColor(progress.value, [0, 1], textMasColor);
    return {
      color: textColor,
    };
  });
  const rStyleBlockBack = useAnimatedStyle(() => {
    const background = interpolateColor(progress.value, [0, 1], blockMasColor);
    return {
      backgroundColor: background,
    };
  });
  return (
    <View style={styles.cardStyle}>
      <Animated.View style={[styles.blockContainer, rStyleBlockBack]}>
        <Animated.Text style={[styles.textCafe, rStyleText]}>
          QFPN
        </Animated.Text>
        <MapSeparatorElement />
        <Text style={styles.subText}>{t('common:mapScreen:distance')}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
  blockContainer: {
    width: 287,
    height: 130,
    alignItems: 'flex-start',
  },
  textCafe: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    marginLeft: '10.1%',
  },
  subText: {
    color: '#bbbbbb',
    fontSize: 20,
    marginTop: 5,
    marginLeft: '10.1%',
  },
});
