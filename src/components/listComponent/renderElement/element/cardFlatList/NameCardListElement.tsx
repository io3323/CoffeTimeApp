import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {FC} from 'react';
import {Color} from '../../../../../Color';
type NameCardListModel = {
  progress: Animated.SharedValue<number>;
  name: string;
};

const {colorMas} = Color.listColorObject.nameCardList;
export const NameCardListElement: FC<NameCardListModel> = ({
  progress,
  name,
}) => {
  const rStyleTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(progress.value, [0, 1], colorMas);
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
