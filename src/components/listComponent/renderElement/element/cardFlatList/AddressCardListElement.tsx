import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {FC} from 'react';
import {colorFlatListObject} from '../../../colorFlatListObject';
type AddressCardListModel = {
  progress: Animated.SharedValue<number>;
  address: string;
};
export const AddressCardListElement: FC<AddressCardListModel> = ({
  address,
  progress,
}) => {
  const rStyleTextColorDesc = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.adressDesriptionLightColor,
        colorFlatListObject.adressDesriptionDarkColor,
      ],
    );
    return {
      color: color,
    };
  });
  return (
    <Animated.Text style={[styles.addressColor, rStyleTextColorDesc]}>
      {address}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  addressColor: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
  },
});
