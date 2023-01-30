import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {colorFlatListObject} from '../../../colorFlatListObject';
import {FC} from 'react';
type NameCardListModel = {
  progress: Animated.SharedValue<number>;
  name: string;
};
export const NameCardListElement: FC<NameCardListModel> = ({
  progress,
  name,
}) => {
  const rStyleTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.nameTextLightColor,
        colorFlatListObject.nameTextDarkColor,
      ],
    );
    return {
      color: color,
    };
  });
  return (
    <Animated.Text style={[styles.nameText, rStyleTextColor]}>
      {name}
    </Animated.Text>
  );
};
const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
  },
});
