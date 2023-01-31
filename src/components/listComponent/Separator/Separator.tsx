import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {Color} from '../../../Color';
export const Separator = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const {colorMas} = Color.listColorObject.separatorColor;
  const rStyle = useAnimatedStyle(() => {
    const background = interpolateColor(progress.value, [0, 1], colorMas);
    return {
      backgroundColor: background,
    };
  });
  return <Animated.View style={[rStyle, styles.separatorStyle]} />;
};
const styles = StyleSheet.create({
  separatorStyle: {
    height: 10,
    width: '100%',
  },
});
