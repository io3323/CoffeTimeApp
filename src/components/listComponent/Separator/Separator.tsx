import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {separatorColorObject} from './separatorColorObject';
import Animated from 'react-native-reanimated';
export const Separator = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const rStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [
        separatorColorObject.separatopLightBack,
        separatorColorObject.separatopDarkBack,
      ],
    );
    return {
      backgroundColor: background,
    };
  });
  return <Animated.View style={[rStyle, styles.separatopStyle]} />;
};
const styles = StyleSheet.create({
  separatopStyle: {
    height: 10,
    width: '100%',
  },
});
