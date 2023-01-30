import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {colorFlatListObject} from '../../../colorFlatListObject';
import {FC} from 'react';
type AddressCardListModel = {
  progress: Animated.SharedValue<number>;
};
export const AddressDescriptionCardListElement: FC<AddressCardListModel> = ({
  progress,
}) => {
  const {t} = useTranslation();
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
    <Animated.Text style={[styles.addressDescription, rStyleTextColorDesc]}>
      {t('common:listScreen:descriptionLocate')}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  addressDescription: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
  },
});
